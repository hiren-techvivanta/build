import React from "react";
import Topnav2 from "../components/Topnav2";
import Spline from "@splinetool/react-spline";

import i1 from "../assets/images/x.png";
import i2 from "../assets/images/telegram.png";
import i3 from "../assets/images/discode.png";
import i4 from "../assets/images/etherscan.png";
import i5 from "../assets/images/polygon.png";
import i6 from "../assets/images/bscscan.png";
import i7 from "../assets/images/logoip.png";
import i8 from "../assets/images/logoi.png";
import i9 from "../assets/images/logoipsum.png";
import i10 from "../assets/images/university.png";
import f101 from "../assets/images/fram-101.png";
import i11 from "../assets/images/Collab W3.png";
import i12 from "../assets/images/DreamCraft.png";
import i13 from "../assets/images/Fishcake.png";
import i14 from "../assets/images/Frogpay.png";
import i15 from "../assets/images/Glider GPT.png";
import i16 from "../assets/images/Kingamoon.png";
import i17 from "../assets/images/Orbler.png";
import i18 from "../assets/images/blockchain.png";
import i19 from "../assets/images/gaming.png";
import i20 from "../assets/images/nft.png";
import i21 from "../assets/images/staking.png";
import i22 from "../assets/images/finlearn.png";
import i23 from "../assets/images/card.png";
import UtilityCard from "../components/UtilityCard";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  const partners = [
    // { id: 1, name: 'Angel', image: 'angel-logo-light0.png', width: 200 },
    // { id: 2, name: 'Bitgert', image: 'bitgert0.png', width: 200 },
    { id: 3, name: "Collab W3", image: i11, width: 117 },
    { id: 4, name: "Dream Craft", image: i12, width: 110 },
    { id: 5, name: "Fishcake", image: i13, width: 100 },
    { id: 6, name: "Frogpay", image: i14, width: 200 },
    { id: 7, name: "Glider GPT", image: i15, width: 87 },
    { id: 8, name: "Kingamoon", image: i16, width: 200 },
    { id: 9, name: "Orbler", image: i17, width: 200 },
    //   { id: 10, name: 'Partner 10', image: 'partner-100.png', width: 100 },
    //   { id: 11, name: 'Partner 11', image: 'partner-110.png', width: 100 },
    //   { id: 12, name: 'Partner 12', image: 'partner-120.png', width: 100 },
  ];

  return (
    <>
      <div className="container-fluid px-0">
        <Topnav2 />
        <div className="position-relative">
          <div className="position-absolute hero-text">
            <div className="custom-border rounded-pill w-auto d-flex align-items-center p-2 w-75 mx-auto mx-md-0 w-md-50">
              <div className="ms-3 badge rounded-pill text-bg-primary text-white">
                New
              </div>
              <p className="m-0 ps-3">Join the revolution now 🔥</p>
            </div>
            <h1 className="fw-bold g-text text-center text-md-start pt-4">
              Onewave The Multi-Chain
            </h1>
            <h1 className="fw-bold g-text text-center text-md-start">
              Multi-Utility Platform
            </h1>
            <h1 className="fw-bold g-text text-center text-md-start">
              For The Wab-3 World
            </h1>

            <p
              className=" text-center text-md-start"
              style={{ color: "#4d4d4d" }}
            >
              Cutting-edge multichain, multi-utility cryptocurrency platform
              designed to provide <br /> users with a comprehensive suite of
              blockchain-based tools and services.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-primary px-5 py-3">
                <i className="fa-solid fa-cart-shopping"></i> Presale
              </button>
              <button className="btn btn-light  px-5 py-3">
                <i class="fa-solid fa-boxes-stacked"></i> Staking
              </button>
            </div>
          </div>
          <Spline
            className="spline"
            scene="https://prod.spline.design/4VdDkNqrkM2jk2GG/scene.splinecode"
          />
        </div>

        {/*  community */}
        <div className="community">
          <div className="community2">
            <div className="frame-44">
              {/* Join the community section */}
              <div className="frame-34">
                <h2 className="section-heading">Join the community</h2>
                <div className="frame-33">
                  <div className="icon-box black-box">
                    <img src={i1} alt="Community icon 1" />
                  </div>
                  <div className="icon-box blue-box">
                    <img src={i2} alt="Community icon 2" />
                  </div>
                  <div className="icon-box">
                    <img
                      src={i3}
                      alt="Community icon 3"
                      className="mw-100 p-0 mh-100"
                    />
                  </div>
                  <div className="icon-box ">
                    <img
                      src={i3}
                      alt="Community icon 1"
                      className="mw-100 p-0 mh-100"
                    />
                  </div>
                </div>
              </div>

              {/* We are listed on section */}
              <div className="frame-42">
                <h2 className="section-heading">We are listed on</h2>
                <div className="frame-41">
                  <div className="logo-row">
                    <div className="logo-box logo-box-lg">
                      <img src={i4} alt="Listing 1" />
                    </div>
                    <div className="logo-box logo-box-lg">
                      <img src={i5} alt="Listing 2" />
                    </div>
                    <div className="logo-box logo-box-lg">
                      <img src={i6} alt="Listing 3" />
                    </div>
                  </div>
                  <div className="logo-row">
                    <div className="logo-box logo-box-md">
                      <img src={i7} alt="Listing 4" />
                    </div>
                    <div className="logo-box logo-box-sm">
                      <img src={i8} alt="Listing 5" />
                    </div>
                    <div className="logo-box logo-box-xl">
                      <img src={i9} alt="Listing 6" />
                    </div>
                    <div className="logo-box logo-box-lg">
                      <img src={i10} alt="Listing 7" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Audited By section */}
              <div className="frame-43">
                <h2 className="section-heading">Audited By</h2>
                <div className="frame-41">
                  <div className="logo-row">
                    <div className="logo-box logo-box-lg">
                      <img src={i5} alt="Auditor 1" />
                    </div>
                    <div className="logo-box logo-box-lg">
                      <img src={i6} alt="Auditor 2" />
                    </div>
                  </div>
                  <div className="logo-row">
                    <div className="logo-box logo-box-lg">
                      <img src={i7} alt="Auditor 3" />
                    </div>
                    <div className="logo-box logo-box-lg">
                      <img src={i9} alt="Auditor 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="frame-101" src={f101} alt="Bottom frame" />
        </div>

        {/* who we are */}
        <div className="container">
          <div className="welcome">
            <div className="welcome__image-container">
              <Spline
                className=" welcome__image spline"
                scene="https://prod.spline.design/ly81-lwJthVkC4ml/scene.splinecode"
              />
              {/* <img
          className="welcome__image"
          src="/images/interactive-ai-website-1-2000-x-20000.png"
          alt="Wave Platform"
        /> */}
            </div>

            <div className="welcome__content">
              <div className="welcome__header">
                <div className="welcome__tag">Who We Are</div>
                <div className="welcome__title-container">
                  <h1 className="welcome__title">Welcome to Wave</h1>
                  <h1 className="welcome__title">A Decentralized</h1>
                  <h1 className="welcome__title">Multi-Utility Ecosystem</h1>
                </div>
              </div>

              <p className="welcome__description">
                Wave Platform is a cutting-edge Web3 ecosystem built on
                blockchain technology, designed to empower users with a suite of
                utilities across multiple chains. From crypto payments and
                gaming to staking and NFTs, Wave is your one-stop solution for
                all things decentralized.
                <br />
                Our mission is to bridge the gap between traditional finance and
                the crypto world, making blockchain technology accessible,
                functional, and rewarding for everyone.
              </p>

              <div className="welcome__features">
                <div className="welcome__feature">Multichain</div>
                <div className="welcome__dot"></div>
                <div className="welcome__feature">User Centric Design</div>
                <div className="welcome__dot"></div>
                <div className="welcome__feature">Innovative Utilities</div>
                <div className="welcome__dot"></div>
                <div className="welcome__feature">Community Driven</div>
              </div>
            </div>
          </div>
        </div>

        {/* partners */}

        <div className="partners">
          <div className="partners__container">
            <h2 className="partners__title">Our Partners</h2>
            <div className="partners__grid">
              {partners.map((partner) => (
                <div key={partner.id} className="partners__item">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="partners__logo"
                    style={{ maxWidth: `${partner.width}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <img className="frame-102" src={f101} alt="Bottom frame" />
        </div>

        {/* utilities */}
        <div className="pt-5">
          <p className="text-center text-primary fw-bold">UTILITIES</p>
          <h1 className="fw-bold g-text text-center">
            OneWave’s Innovative Utilities
          </h1>
        </div>
        <div className="d-flex gap-4 justify-content-center align-items-start" style={{gridTemplateColumns: "repeat(4, 1fr)"}}>
          <div className="u-card-cont">
            <div className="card rounded-4 utilities-card-border shadow">
              <div className="card-body p-4">
                <h4 className="text-center fw-bold">Wave Blockchain</h4>
                <p className="text-center m-0" style={{ color: "#717171" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img src={i18} className="img-fluid" alt="Blockchain" />
              </div>
            </div>
          </div>
          <div className="u-card-cont">
            <div className="card rounded-4 utilities-card-border shadow">
              <div className="card-body p-4 pb-0">
                <h4 className="text-start fw-bold">Wave Staking</h4>
                <p className="text-start m-0" style={{ color: "#717171" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <div className="text-end">
                  <img src={i21} className="img-fluid" alt="Blockchain" />
                </div>
              </div>
            </div>
          </div>
          <div className="u-card-cont">
            <div className="card rounded-4 utilities-card-border shadow">
              <div className="card-body p-4 pb-0">
                <h4 className="text-start fw-bold">Wave FinLern</h4>
                <p className="text-start m-0" style={{ color: "#717171" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <div className="text-end">
                  <img src={i22} className="img-fluid" alt="Blockchain" />
                </div>
              </div>
            </div>
          </div>
          <div className="u-card-cont">
            <div className="card rounded-4 utilities-card-border shadow">
              <div className="card-body p-4 pb-0">
                <h4 className="text-center fw-bold">Wave NFT Marketplace</h4>
                <p className="text-center " style={{ color: "#717171" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <div className="text-end">
                  <img src={i20} className="img-fluid" alt="Blockchain" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="u-card-cont">
            <div className="card rounded-4 utilities-card-border shadow">
              <div className="card-body p-4 pb-0">
                <h4 className="text-start fw-bold">Wave FinLern</h4>
                <p className="text-start m-0" style={{ color: "#717171" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <div className="text-end">
                  <img src={i22} className="img-fluid" alt="Blockchain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="utilities-grid">
  <div class="utility-card" style={{height:"600px"}}>Wave Blockchain</div>
  <div class="utility-card">Wave Staking</div>
  <div class="utility-card">Wave FinLearn</div>
  <div class="utility-card">Wave NFT Marketplace</div>
  <div class="utility-card wide-card">Wave Crypto Exchange</div>
  <div class="utility-card">Wave Micro Tasks App</div>
  <div class="utility-card">Crypto Gaming</div>
  


  <div class="utility-card">Wave Wallet</div>
 
  <div class="utility-card">Wave Card</div>
  <div class="utility-card">Wave Payment Gateway</div>
  
  <div class="utility-card">Wave AI Calling</div>
  <div class="utility-card">International Forex</div>
  <div class="utility-card">Wave Arbitrage Bot</div>
</div>

      </div>
    </>
  );
};

export default Home;
