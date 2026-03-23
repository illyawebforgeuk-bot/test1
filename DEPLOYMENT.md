# Инструкция по деплою (развертыванию) WebForge LTD

Этот проект создан на базе **Vite + React**. Для его запуска на реальном хостинге (Vercel, Netlify, Cloudflare Pages или свой сервер) следуйте этой инструкции.

---

## 🚀 Вариант 1: Vercel / Netlify (Рекомендуется)

Самый быстрый и надежный способ для статических сайтов.

1.  **GitHub**: Залейте код в приватный или публичный репозиторий GitHub.
2.  **Vercel / Netlify**: Подключите репозиторий.
3.  **Настройки**:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
4.  **Routing (Важно!)**: Поскольку это Single Page Application (SPA), нужно настроить перенаправление всех запросов на `index.html`, иначе страницы `/terms`, `/privacy` и другие будут выдавать 404 при перезагрузке.
    *   **Для Vercel**: Файл `vercel.json` (уже должен быть в корне или создайте его):
        ```json
        {
          "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
        }
        ```
    *   **Для Netlify**: Создайте файл `public/_redirects` с содержанием:
        ```text
        /* /index.html 200
        ```

---

## 🛠 Вариант 2: Свой сервер (VPS / Shared Hosting)

Если вы используете Nginx, Apache или обычный хостинг через FTP.

1.  Выполните команду сборки локально:
    ```bash
    npm run build
    ```
2.  После этого в корне появится папка `dist`.
3.  Загрузите содержимое папки `dist` в корневую директорию вашего сайта (обычно `public_html` или `/var/www/html`).
4.  **Настройка Nginx**:
    ```nginx
    location / {
        try_files $uri $uri/ /index.html;
    }
    ```
5.  **Настройка Apache (.htaccess)**:
    Создайте файл `.htaccess` в папке `dist`:
    ```apache
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [QSA,L]
    ```

---

## 💳 Настройка Stripe (Production)

Для работы платежей на реальном хостинге:

1.  **Environment Variables**: Создайте `.env` файл на хостинге или в настройках Vercel/Netlify.
2.  Добавьте ваши ключи (из дашборда Stripe):
    ```text
    VITE_STRIPE_PUBLIC_KEY=pk_live_...
    ```
3.  Убедитесь, что в коде вы используете `import.meta.env.VITE_STRIPE_PUBLIC_KEY`.

---

## ✅ Чек-лист перед деплоем

1.  [ ] Замените все тестовые ссылки (если есть) на реальные.
2.  [ ] Убедитесь, что в `Footer.jsx` указаны актуальные данные компании (CRN, VAT).
3.  [ ] Проверьте SEO-теги в `index.html`.
4.  [ ] Протестируйте форму заказа / кнопку оплаты в режиме Stripe Live Mode (перед этим убедитесь, что аккаунт Stripe активирован).
5.  [ ] Проверьте мобильную версию (хотя мы её активно полировали).

---

**WebForge LTD** — Готов к запуску. 🛠️🦾
