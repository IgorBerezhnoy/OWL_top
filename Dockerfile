FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN pnpm install
ADD . .
ENV NODE_ENV production
RUN pnpm run build
RUN pnpm prune --production
CMD ["pnpm", "start"]
EXPOSE 3000