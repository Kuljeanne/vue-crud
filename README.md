# vue-crud

Одностраничное приложение на Vue 3 in Vite с возможностью добавлять, редактировать и удалять пользователей из базы данных.
Данные о пользователях хранятся в БД PostgreSQL
![image](https://github.com/Kuljeanne/vue-crud/assets/107869684/e0385b1d-6519-434d-a59f-912776c82dd9)

## Requirments
  - Nodejs/npm
  - Postgresql

## Настройки

Перед запуском сервера необходимо установить postgresql и обновить данные о базе данных в папке server/index.ts

В консоли psql запустить:
```sh
create TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  surname VARCHAR(255)
)
```
## Инициализация проекта

```sh
npm install
```

### Запуск сервера

Необходимо запустить две команды:

```sh
npm run dev
npm run server
```

фронт: http://localhost:5173/
бэк: http://localhost:3000/

### Сборка

```sh
npm run build
```

