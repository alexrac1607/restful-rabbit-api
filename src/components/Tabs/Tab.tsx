import React from "react";

interface TabProps {
  text: string;
  statusCodeText?: JSX.Element;
  isSelected: boolean;
  onClick: (newTab: unknown) => void;
}

const Tab = ({ text, isSelected, onClick, statusCodeText }: TabProps) => {
  const classes = isSelected
    ? "text-white border-b p-1 mx-2 border-orange-400 cursor-pointer"
    : "text-white  p-1 mx-2 cursor-pointer";
  return (
    <span className={classes} onClick={onClick}>
      {text} {statusCodeText}
    </span>
  );
};

export default Tab;
