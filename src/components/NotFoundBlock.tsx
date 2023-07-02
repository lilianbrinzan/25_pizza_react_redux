import React from 'react';

const NotFoundBlock: React.FC = () => {
  return (
    <div>
        <h1>Ошибка 404: страница не найдена </h1>
        <p>
            К сожалению, такой страницы не существует!
            <span>😟</span>
        </p>
        <a href='/'>На главную страницу</a>
    </div>
  );
};

export default NotFoundBlock;