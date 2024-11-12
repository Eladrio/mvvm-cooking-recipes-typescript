import { ReactNode } from "react";
import { OptionCardStyles } from "./styledComponents";

type OptionCardComponentPropsType = {
  children: ReactNode;
  onClick: () => void;
}

type ElementsPropType = {
  children: ReactNode;
}

interface OptionCardComponentType extends React.FC<OptionCardComponentPropsType> {
  Header: React.FC<ElementsPropType>;
  Body: React.FC<ElementsPropType>;
}


const Body: React.FC<ElementsPropType> = ({ children }) => {
  return <div>{children}</div>;
};

const Header: React.FC<ElementsPropType> = ({ children }) => {
  return <div>{children}</div>;
};

const OptionCardComponent: OptionCardComponentType = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  }
  return <OptionCardStyles onClick={handleClick}>{children}</OptionCardStyles>;
};

OptionCardComponent.Header = Header;
OptionCardComponent.Body = Body;
export default OptionCardComponent;
