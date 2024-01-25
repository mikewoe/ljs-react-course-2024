import React from 'react'
import ReactDOM from 'react-dom/client'
import {restaurants} from '../materials/mock.js'

const renderOldStyle = () => {
  return React.createElement('div', {
    children: [
      React.createElement('h1', {children: 'Рестораны'}),
      React.createElement('div', {
        children: [
          React.createElement('h2', {children: restaurants[0].name}),
          React.createElement('h3', {children: 'Меню'}),
          React.createElement('ul', {
            children: [
              React.createElement('li', {
                children: `${restaurants[0].menu[0].name} (${restaurants[0].menu[0].ingredients.join(', ')})`
              }),
              React.createElement('li', {
                children: `${restaurants[0].menu[1].name} (${restaurants[0].menu[1].ingredients.join(', ')})`
              }),
              React.createElement('li', {
                children: `${restaurants[0].menu[2].name} (${restaurants[0].menu[2].ingredients.join(', ')})`
              })
            ]
          }),
          React.createElement('h3', {children: 'Отзывы'}),
          React.createElement('ul', {
            children: [
              React.createElement('li', {
                children: `${restaurants[0].reviews[0].rating} -- ${restaurants[0].reviews[0].text}`
              }),
              React.createElement('li', {
                children: `${restaurants[0].reviews[1].rating} -- ${restaurants[0].reviews[1].text} `
              })
            ]
          })
        ]
      })
    ]
  })
}

const renderJsx = () => {
  return <div>
    <h1>Рестораны</h1>

    <div>
      <h2>{restaurants[0].name}</h2>
      <h3>Меню</h3>

      <ul>
        <li>{`${restaurants[0].menu[0].name} (${restaurants[0].menu[0].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[0].menu[1].name} (${restaurants[0].menu[1].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[0].menu[2].name} (${restaurants[0].menu[2].ingredients.join(', ')})`}</li>
      </ul>

      <h3>Отзывы</h3>

      <ul>
        <li>{`${restaurants[0].reviews[0].rating} -- ${restaurants[0].reviews[0].text} `}</li>
        <li>{`${restaurants[0].reviews[1].rating} -- ${restaurants[0].reviews[1].text} `}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[1].name}</h2>
      <h3>Меню</h3>

      <ul>
        <li>{`${restaurants[1].menu[0].name} (${restaurants[1].menu[0].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[1].menu[1].name} (${restaurants[1].menu[1].ingredients.join(', ')})`}</li>
      </ul>

      <h3>Отзывы</h3>

      <ul>
        <li>{`${restaurants[1].reviews[0].rating} -- ${restaurants[1].reviews[0].text} `}</li>
        <li>{`${restaurants[1].reviews[1].rating} -- ${restaurants[1].reviews[1].text} `}</li>
        <li>{`${restaurants[1].reviews[2].rating} -- ${restaurants[1].reviews[2].text} `}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[2].name}</h2>
      <h3>Меню</h3>

      <ul>
        <li>{`${restaurants[2].menu[0].name} (${restaurants[2].menu[0].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[2].menu[1].name} (${restaurants[2].menu[1].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[2].menu[2].name} (${restaurants[2].menu[2].ingredients.join(', ')})`}</li>
      </ul>

      <h3>Отзывы</h3>

      <ul>
        <li>{`${restaurants[2].reviews[0].rating} -- ${restaurants[2].reviews[0].text} `}</li>
      </ul>
    </div>

    <div>
      <h2>{restaurants[3].name}</h2>
      <h3>Меню</h3>

      <ul>
        <li>{`${restaurants[3].menu[0].name} (${restaurants[3].menu[0].ingredients.join(', ')})`}</li>
        <li>{`${restaurants[3].menu[1].name} (${restaurants[3].menu[1].ingredients.join(', ')})`}</li>
      </ul>

      <h3>Отзывы</h3>

      <ul>
        <li>{`${restaurants[3].reviews[0].rating} -- ${restaurants[3].reviews[0].text} `}</li>
        <li>{`${restaurants[3].reviews[1].rating} -- ${restaurants[3].reviews[1].text} `}</li>
      </ul>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  renderJsx()
);

// root.render(
//     renderOldStyle()
// );
