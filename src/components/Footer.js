import React from "react";
import "../styles/Footer.css";

const Footer = ({ footer }) => {
  return (
    <>
      <div className="footer">
        <div>
          <p> SUPPORT</p>
          {footer.support.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}{" "}
            </a>
          ))}
        </div>

        <div>
          <p> RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> ABOUT</p>
          {footer.aboutUS.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p> CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a key={item.url} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>

        {/* end  */}
      </div>
      <div className="footerBorder">
        <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
