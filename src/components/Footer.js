import React from 'react';
import i1 from '../assets/images/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__logo-section">
            <img className="footer__logo" src={i1} alt="Wave Logo" />
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="footer__social-link">
              <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="footer__social-link">
              <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="footer__social-link">
              <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="#" className="footer__social-link">
              <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer__links-section">
            <div className="footer__column">
              <h3 className="footer__heading">NAVIGATION</h3>
              <ul className="footer__links">
                <li><a href="#">Learn</a></li>
                <li><a href="#">Presale</a></li>
                <li><a href="#">Staking</a></li>
                <li><a href="#">Roadmap</a></li>
                <li><a href="#">Tokenomics</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h3 className="footer__heading">RESOURCES</h3>
              <ul className="footer__links">
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">Pitch Decks</a></li>
                <li><a href="#">Audit Report</a></li>
                <li><a href="#">Brand Deck</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Where & How to Buy?</a></li>
                <li><a href="#">Become A Ambassador</a></li>
              </ul>
            </div>
            
            <div className="footer__column footer__column--double">
              <h3 className="footer__heading">UTILITIES</h3>
              <div className="footer__double-columns">
                <ul className="footer__links">
                  <li><a href="#">Wave Blockchain</a></li>
                  <li><a href="#">Wave Crypto Exchange</a></li>
                  <li><a href="#">Wave NFT Marketplace</a></li>
                  <li><a href="#">Wave Wallet</a></li>
                  <li><a href="#">Wave Staking</a></li>
                  <li><a href="#">Wave Payment Gateway</a></li>
                  <li><a href="#">Wave Arbitrage Bot</a></li>
                  <li><a href="#">International Forex</a></li>
                </ul>
                
                <ul className="footer__links">
                  <li><a href="#">Wave Card</a></li>
                  <li><a href="#">Wave FinLearn</a></li>
                  <li><a href="#">Wave Micro Tasks</a></li>
                  <li><a href="#">Wave Crypto Gaming</a></li>
                  <li><a href="#">Wave AI Calling</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            Copyright © 2025 Wave. All Rights Reserved
          </div>
          <div className="footer__policies">
            <a href="#">Cookies Policy</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">AML Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;