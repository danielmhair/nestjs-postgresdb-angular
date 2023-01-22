FROM node:18-alpine as base
WORKDIR /api
COPY api/package*.json ./
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY --chown=node:node ./api ./
USER node
CMD ["npm", "start"]