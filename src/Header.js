import React from "react";
import { Card } from "./Elements/Card";

const Header = ({ style }) => (
  <Card
    style={{
      opacity: style.opacity,
      background: `${style.bg}`,
      overflow: "hidden",
      height: style.height
    }}
  >
    <h1>Show Me</h1>
  </Card>
);

export default Header;

//background: `rgba(${Math.floor(style.r)}, 100, 100, 1)`
