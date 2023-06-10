import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef);
    inputRef.current.focus();
  };
  const handleClickWidth = () => {
    inputRef.current.style.width = "300px";
  };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="text" id="email" className="form-control" />
            <button className="btn btn-primary" onClick={handleClick}>Кнопка</button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>Изменить ширину объект</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
