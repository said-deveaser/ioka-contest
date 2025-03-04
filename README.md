# IOKA contest project

## Запуск проекта
### 1. Требования
Разработка и сборка проекта проводились на **NodeJS v20.11.0** версии.  
Пакетный менеджер - **npm v9.8.0**.

### 2. Установка зависимостей и сборка проекта
* `npm install` - установка зависимостей
* `npm run build` - сборка проекта
* `npm run preview` - предпросмотр собранного проекта на `http://localhost:4173/`


### 3. DevMode
* `npm run dev` - Запуск сервера для разработки на `http://localhost:5173/`

## Реализованные компоненте

* UI пагинации лежат по пути `src/components/ui/pagination/`
* Логика в хуке лежит по пути `src/components/logic/hooks/usePaginationController.ts`
* Логика в классе и хук к нему лежат по пути `src/components/logic/classes/`
* Compound компоненты, объединяющие в себе ui и logic по пути `src/components/compound/`
