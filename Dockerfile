ARG node_version=18.16.0

# Stage 1: Установка зависимостей
FROM node:${node_version} AS deps


LABEL maintainer="anclaev<iahugo@yandex.ru>"
LABEL description="Elle Bot"

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install --silent

# Stage 2: Сборка проекта
FROM node:${node_version} AS builder

WORKDIR /api

COPY . .
COPY --from=deps /api/node_modules ./node_modules

RUN yarn build

# Stage 3: Запуск приложения
FROM node:${node_version} AS runtime

WORKDIR /home/user/ellechildbot/api

ARG node_env=production
ARG pg_user=local
ARG pg_pass=local
ARG api_port=3000

ENV NODE_ENV=${node_env} 
ENV PG_USER=${pg_user}
ENV PG_PASS=${pg_pass}
ENV APP_PORT=${api_port}

COPY --from=deps /api/node_modules ./node_modules
COPY --from=deps /api/package.json ./package.json
COPY --from=builder /api/.env.${node_env} ./.env.${node_env}
COPY --from=builder /api/dist ./dist

EXPOSE ${api_port}

CMD ["npm", "run", "start:production"]

