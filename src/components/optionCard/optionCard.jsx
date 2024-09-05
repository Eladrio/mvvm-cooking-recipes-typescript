import "./optionCard.scss";
import React from "react";

const Body = ({ children }) => {
  return <div>{children}</div>;
};

const Header = ({ children }) => {
  return <div>{children}</div>;
};

const OptionCardComponent = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  }
  return <div className="option-card-component" onClick={handleClick}>{children}</div>;
};

OptionCardComponent.Header = Header;
OptionCardComponent.Body = Body;
export default OptionCardComponent;
