# # FROM node:14 AS deps

# # WORKDIR /app
# # COPY package.json yarn.lock .npmrc ./
# # RUN yarn install --frozen-lockfile

# # FROM node:14 AS builder
# # WORKDIR /app
# # COPY . .
# # COPY --from=deps /app/node_modules ./node_modules
# # ARG APP_ENV
# # RUN yarn site

# # FROM harbor.meetsocial.cn/library/node:v12.22.6-alpine AS runner
# # WORKDIR /app
# # COPY --from=builder /app/_site /app/dist

# # EXPOSE 8000
# # CMD serve ./dist -s -p 8000


# FROM harbor.meetsocial.cn/library/node:v12.22.6-alpine AS builder
# WORKDIR /app
# COPY . .
# RUN npm install --registry=http://192.168.1.55:8081/repository/npm-all
# RUN npm run site

# FROM nginx

# COPY --from=builder /app/site ./www/

FROM harbor.meetsocial.cn/library/nginx:v1

RUN mkdir /services/websites/mui

ADD ./_site /services/websites/mui

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
