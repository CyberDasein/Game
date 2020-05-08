import React from "react";
import logo from "../img/crosshair.svg";

export const Navigations = () => {
  return (
    <div className="row bg-danger">
      <div className="col-12">
        <ul className="nav nav-pills justify-content-between">
          <li className="nav-item nav-link">
            <a className="navbar-brand" href="#">
              <img width="30" height="30" src={logo} alt="" />
            </a>
          </li>
          <li className="nav-item nav-link">
            <button className="btn btn-success" type="button">
              Войти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
