# Работа С API

**! Перед началом работы необходимо выполнить предыдущие домашние задания и подтянуть все свои наработки в новый репозиторий**

Так же надо установить React-Query:
```
yarn add react-query
```

# Ссылки
* [Дизайн в Figma](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=306%3A66674)
* [Stoplight с запросами](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MDA5OTc-get-api-core-payment-list)
* [Документация React-Query](https://react-query.tanstack.com/overview)
* [Пример с livecoding'а](https://github.com/KODE-Frontend-Interships/lesson-5-react-query-example)
* [Запись лекции](https://drive.google.com/file/d/170UIWCrIvrn74yvmdQTpIEZLj_AsczSQ/view?usp=sharing)
* [Презентация](https://docs.google.com/presentation/d/1y4wA7FtBXCvMetgckLdTSfpI3VthcDpPiJvdqgJiFus/edit?usp=sharing)

# Домашнее задание

Необходимо подключить запросы с мокового сервера для раздела платежей, который вы собирали ранее

- Перед работой необходимо обернуть приложение в `QueryClientProvider`
- На экране `Платежи`, `Мобильная связь` в разделе платежей необходимо заменить моковые данные на [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MDA5OTc-get-api-core-payment-list) из стоплайта `GET api/core/payment/list` при помощи useQuery
- При выборе оператора связи и переходу на экран с формой оплаты необходимо получить из [запроса](https://kode-education.stoplight.io/docs/kode-bank/b3A6Mjk5MjkwNTg-get-api-core-payment-service-id) процент кэшбека и другие данные по методу `GET api/core/payment/{service_id}`
- После заполнения формы по платежу мобильного оператора мы должны [попасть на экран](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=320%3A75859) `Подтверждение`
- На экране подтверждения отправке формы необходимо вызвать [запрос](https://kode-education.stoplight.io/docs/kode-bank/b3A6MzE3MzA3MTY-api-core-history) при помощи метода `POST /api/core/history`
- Выбор карты не делаем, в поле `card_id: number` прокидываем любое число, все остальные данные должны подтягиваться из ответов других вопросов
- OTP не делаем!
- После отправки формы в зависимости от ответа с сервера мы должны попасть [на экран оплаты](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=372%3A82448) или [экран отклонения](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=404%3A85746)
- По нажатию на "Готово" мы должны вернуться обратно на экран `Платежи`

# Требования

- Для запросов используем fetch
- Разделяем компоненты на глупые/умные

## Работа со Stoplight

Есть несколько важных моментов:
- Так как запросы моковые, они могут принимать любые данные, потому в поля `Token` или `Authorization` можете писать любую строку
- Для запросов обязательно используем **Mock Server**! \
  [image](https://user-images.githubusercontent.com/89947425/146177197-2c925162-863a-453a-9587-47914dc5f710.png)
- Если что-то некорректно отрабатывает, пишите в чат, будем выяснять проблемы со Stoplight

