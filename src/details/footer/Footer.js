import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
     <footer className="footer">
       <div className="footer__links">
         <ul>
           <li><a href="/">Home</a></li>
           <li><a href="/faq">FAQs</a></li>
           <li><a href="/trading-rules">Trading Rules</a></li>
           <li><a href="/affiliate-program">Affiliate Program</a></li>
           <li><a href="/contact-us">Contact Us</a></li>
         </ul>
       </div>
     </footer>
  );
 };
export default Footer;
