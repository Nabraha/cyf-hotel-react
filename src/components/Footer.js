import React from "react";

const Footer = props => {
  const info = props.contactInfo;
  return (
    <ul>
      {info.map((detailedInfo, index) => (
        <li key={index} className="footer">
          {detailedInfo}
        </li>
      ))}
    </ul>
  );
};
export default Footer;
