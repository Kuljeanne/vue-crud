# vue-crud

Одностраничное приложение на Vue 3 in Vite с возможность добавлять, редактировать и удалять пользователей из базы данных.

## Requirments
  - Nodejs/npm
  - Postgresql

## Settings

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

