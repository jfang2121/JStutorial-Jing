import React from "react";

//add the ? for color, we are telling typescript that the color property is optional, so that you don't need to specifyin the html in App.tsx <button>
interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
