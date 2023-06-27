import React from "react";
import "./myLabel.css";

interface MyLabelProps {
  /**
   *Tamaño por defecto del label
   */
  label: string;
  /**
   * How size should the label be?
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * What color should the label be?
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * How allCaps should the label be?
   */
  allCaps: boolean;
  /**
   * How fontColor should the label be?
   */
  fontColor?: string;
}

const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
