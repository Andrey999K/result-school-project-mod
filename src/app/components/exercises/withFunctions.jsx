import React from "react";
import CardWrapper from "../common/Card";

const WithFunctions = (Component) => (props) => {
  const isAuth = localStorage.getItem("auth");
  const onLogin = () => {
    localStorage.setItem("auth", "true");
  };
  const onLogOut = () => {
    localStorage.removeItem("auth");
  };
  return (
    <>
      <CardWrapper>
        <Component {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
      </CardWrapper>
    </>
  );
};

export default WithFunctions;
