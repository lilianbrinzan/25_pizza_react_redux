import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => {
    return (
        <ContentLoader
              //  Скорость анимации загрузки (по умолчанию - 2)
            speed={2}
              //  Задаёт ширину заглушки (400)
            width={280}
              //  Задаёт высоту заглушки (160)
            height={520}
              //  Определяет прямоугольную область просмотра для заглушки (0 0 400 160)
            viewBox="0 0 280 520"
              //  Задаёт цвет фона заглушки (#f3f3f3)
            backgroundColor="#f3f3f3"
              //  Задаёт цвет переднего плана заглушки (цвет самой анимации, по умолчанию - #ecebeb)
            foregroundColor="#ecebeb"
        >
            {/* Круг */}
            {/* 
                cx - Определяет горизонтальную координату центра круга относительно верхнего левого угла заглушки;
                cy - Определяет вертикальную координату центра круга относительно верхнего левого угла заглушки;
                r - Задаёт радиус круга;
            */}
            <circle cx='139' cy='139' r='139' />
            {/* Прямоугольники */}
            {/* 
                x - Задаёт горизонтальную позицию (отступ) прямоугольника относительно верхнего левого угла заглушки;
                y - Задаёт вертикальную позицию (отступ) прямоугольника относительно верхнего левого угла заглушки;
                rx - Задаёт радиус скругления углов горизонтальных сторон прямоугольника (схож со свойством border-radius);
                ry - Задаёт радиус скругления углов вертикальных сторон прямоугольника (схож со свойством border-radius);
                width - ширина прямоугольника
                height - высота прямоугольника
            */}
            <rect x={0} y={315} rx={10} ry={10} width={280} height={24}/>
            <rect x={0} y={355} rx={10} ry={10} width={280} height={88}/>
            <rect x={0} y={480} rx={10} ry={10} width={88} height={27}/>
            <rect x={130} y={470} rx={30} ry={30} width={150} height={47}/>
        </ContentLoader>
    );
};

export default Skeleton;