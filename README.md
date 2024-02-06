
```shell
npm create vite@latest

npm install

npm run dev

npm install sass

npm install classnames

npm install @reduxjs/toolkit

pm install react-redux
```

TODO:
некорректное поведение, при переключении ресторанов счетчик блюд переносится на новый ресторан
(если в ресторане #1 заказано блюдо №1, то при выборе ресторана #1 там тоже будет заказано блюдо №1, соответствующее ему)

происходит так видимо потому что у нас не меняется компонент ресторана -- просто передается другой объект restaurant, и react
рендерит все содержимое, но сохраняет state для Dish. Как это на костылях обойти -- понятно, но лучше посмотреть на best practice от преподавателя
дело именно в позиции компонента -- реакт видит что он рендерится на том же месте и считает что это тот же компонент

https://react.dev/learn/preserving-and-resetting-state
решил с помощью key

спросить как избежать
Each child in a list should have a unique "key" prop.
для пустых div