import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const arrCatigory = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {arrCatigory.map((name, key) => {
          return (
            <li
              key={key}
              onClick={() => setActiveIndex(key)}
              className={activeIndex === key ? 'active' : ''}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
