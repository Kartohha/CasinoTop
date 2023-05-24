import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainHeader.css"

const MainHeader = () => {
  const menuData = [
    {
      title: "Главная",
      route: "/",
    },
    {
      title: "Рулетка",
      route: "/roulette",
    },
    {
      title: "Слоты",
      route: "/slot",
    },
    {
      title: "Блэкджек",
      route: "/blackjeck",
    },
    {
      title: "Регистрация",
      route: "/registration",
    },
    {
      title: "Вход",
      route: "/login",
    }
  ];
  const navigate = useNavigate();
  const handlerRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="head">
      {menuData.map((el, idx) => {
    
       
        return (
          <div className={`men`} onClick={() => handlerRoute(el.route)} key={`menu${idx}`}>
            {el.title}
            <div className={`men${idx}`}></div>
          </div>
        );
      })}
    </div>
  );
};
export default MainHeader;
