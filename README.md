# Описание задачи

Создайте приложение для просмотра текущей погоды и прогноза на несколько дней вперед, используя OpenWeatherMap API. Приложение должно позволять пользователям искать погоду в разных городах и сохранять избранные города.

## Технические требования

### Next.js и TypeScript

- Приложение должно быть написано с использованием Next.js и TypeScript.

### Структура страниц

- **Главная страница**: Поле поиска для ввода города и отображение текущей погоды в выбранном городе.
- **Страница прогноза погоды**: Детальный прогноз погоды на несколько дней вперед.
- **Страница избранного**: Отображает сохраненные пользователем города с краткой информацией о погоде.

### Radix UI и styled-components

- Используйте **Radix UI** и **styled-components**.

### Работа с API

- Используйте **OpenWeatherMap API** для получения текущей погоды и прогноза.
- Взаимодействие с API должно быть реализовано через **Axios**.

### Состояние приложения

- Управляйте состоянием (**избранные города, результаты поиска**) с помощью **Zustand**.
- Избранные города должны сохраняться в глобальном состоянии и оставаться после перезагрузки страницы.

### UI/UX

- Обеспечьте понятный интерфейс, включая **индикацию загрузки данных и обработку ошибок**.

### Качество кода

- Используйте **ESLint** для проверки кода на соответствие стандартам качества.
- Настройте линтер для стилей (например, **Stylelint**) для поддержания единообразия и качества **CSS/SCSS** кода.

## Что будет оцениваться

- Умение работать с внешним API и отображать данные пользователям.
- Организация состояния приложения и работа с Zustand.
- Обработка различных состояний интерфейса (**загрузка, ошибки**).
- Структура проекта и поддержание чистоты кода.

## Рекомендации по установке и запуску проекта

1. **Скачайте проект**
   ```bash
   git clone https://github.com/kmpronina/TestWork5544.git
   ```
2. **Перейдите в папку с проектом**
   ```bash
   cd TestWork5544
   ```
3. **Установите зависимости**
   ```bash
   npm install
   ```
4. **Создайте файл `.env.local` и добавьте API ключ**

   ```env
   NEXT_PUBLIC_WEATHER_APP_APIKEY={ваш API ключ}
   ```

   Для получения API ключа, зарегистрируйтесь на сайте [OpenWeatherMap](https://openweathermap.org/) и получите ключ доступа.

5. **Запустите проект**
   ```bash
   npm run dev
   ```

## Деплой

Вы также можете просмотреть проект на **Vercel**:  
[https://test-work5544.vercel.app/](https://test-work5544.vercel.app/)

## Особенности проекта

- Использование **Zustand** для управления состоянием приложения.
- Использование **Axios** для взаимодействия с API.
- Использование **styled-components** для стилизации компонентов.
- Использование **Radix UI** для создания интерфейса.
- Использование **ESLint** для проверки кода на соответствие стандартам качества.
- Использование **FSD** для архитектуры приложения (выбор может быть не очевидным, но при возможном развитии приложения он точно себя оправдает).
