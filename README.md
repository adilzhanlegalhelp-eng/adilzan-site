# Сайт ТОО «Академия юридической помощи Әділзаң»

## Что заменить перед запуском

Откройте файл `src/App.jsx` и замените вверху:

```js
const WHATSAPP_NUMBER = '77000000000'
const INSTAGRAM_URL = '#'
const PHONE_DISPLAY = '+7 700 000 00 00'
const EMAIL = 'info@adilzan.kz'
const ADDRESS = 'г. Астана, адрес офиса'
```

## Запуск на компьютере

1. Установите Node.js LTS: https://nodejs.org
2. Откройте папку проекта в VS Code.
3. В терминале выполните:

```bash
npm install
npm run dev
```

Сайт откроется по локальной ссылке, обычно `http://localhost:5173`.

## Проверка перед публикацией

```bash
npm run build
npm run preview
```

## Публикация на Vercel

1. Создайте аккаунт на Vercel.
2. Загрузите проект в GitHub.
3. В Vercel нажмите `Add New Project`.
4. Выберите репозиторий.
5. Framework Preset: `Vite`.
6. Build Command: `npm run build`.
7. Output Directory: `dist`.
8. Нажмите Deploy.

После публикации Vercel выдаст ссылку вида `project-name.vercel.app`.

## Подключение домена

В настройках проекта Vercel откройте `Domains`, добавьте домен и настройте DNS по инструкции Vercel.
