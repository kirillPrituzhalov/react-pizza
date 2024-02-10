import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onClickCategory }) => {
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
          {arrCatigory.map((name, i) => {
            return (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={value === i ? 'active' : ''}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);
export default Categories;
