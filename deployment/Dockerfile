FROM node:18 AS build

WORKDIR /app
ADD ./package.json ./pnpm-lock.yaml /app/
RUN npm i -g pnpm && pnpm install
ADD . /app
RUN pnpm docs:build


FROM nginx:1.21

ADD ./deployment/nginx.conf /etc/nginx/conf.d/default.conf
ADD ./deployment/docker_entrypoint.sh /docker_entrypoint.sh
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

RUN chmod +x /docker_entrypoint.sh && /docker_entrypoint.sh
