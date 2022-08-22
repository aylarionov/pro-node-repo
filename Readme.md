Перед запусклм проекта нужно создать .env файл со следующими переменными:
TOKEN - ваш токен от телеграм бота
DATABASE_URL - ссылка для подключения к базе данных вида "postgresql://${username}:${password}@localhost:${port}/${dbname}?schema=public"

Для первого запуска:
- npm run init
- npm start или npm run dev 