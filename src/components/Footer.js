import React from "react";

const Footer = props => {
  const info = props.contactInfo;
  return (
    <ul>
      {info.map(detailedInfo => (
        <li>{detailedInfo}</li>
      ))}
    </ul>
  );
};
export default Footer;
