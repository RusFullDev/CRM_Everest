# FROM node:alpine AS builder
# WORKDIR /app
# COPY /*.json ./
# RUN npm install
# COPY . .
# RUN npm run build


# FROM node:alpine 
# WORKDIR /app
# COPY --from=builder /app ./
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"] 

# Определение стадии сборки
# FROM node:14-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Определение стадии выполнения
# FROM node:16-alpine
# WORKDIR /app
# COPY --from=builder /app ./
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]


# Используйте конкретную версию alpine для лучшей предсказуемости
FROM node:16-alpine AS builder
WORKDIR /app

# Устанавливаем Python и сборочные инструменты
RUN apk add --no-cache python3 make g++ && ln -sf python3 /usr/bin/python

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальной проект
COPY . .

# Собираем приложение
RUN npm run build

FROM node:16-alpine
WORKDIR /app

# Копируем собранные файлы из предыдущего шага
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start:prod"]