import React, { useEffect, useRef } from "react";
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
import i24 from "../assets/images/Exchange.png";
import i25 from "../assets/images/fram-102.png";

import i26 from "../assets/images/aemethish.png";
import i27 from "../assets/images/emrald.png";
import i28 from "../assets/images/iron.png";
import i29 from "../assets/images/ore.png";
import i30 from "../assets/images/ruby.png";
import i31 from "../assets/images/capsule.png";
import i32 from "../assets/images/stare.png";
import i33 from "../assets/images/dimoand.png";
import i34 from "../assets/images/gold.png";
import i35 from "../assets/images/lapis.png";
import i36 from "../assets/images/wave.png";
import i37 from "../assets/images/bluejems.png";
import i38 from "../assets/images/bluestone.png";
import { useNavigate } from "react-router-dom";

import i39 from "../assets/images/Team1.png";
import i40 from "../assets/images/Team2.png";
import i41 from "../assets/images/Team3.png";
import i42 from "../assets/images/Team4.png";
import i43 from "../assets/images/Team5.png";
import PieChart from "../components/PieChart";

import i44 from "../assets/images/Group1.svg";
import i45 from "../assets/images/Group2.svg";

import i46 from "../assets/images/binance.svg";
import i47 from "../assets/images/ethereum.svg";
import i48 from "../assets/images/polygon.svg";
import i49 from "../assets/images/lycan.svg";
import SlideInAnime from "../components/SlideInAnime";

import i50 from "../assets/images/Frame-107.png";
import i51 from "../assets/images/Frame-108.png";
import Footer from "../components/Footer";
import WaveSubscription from "../components/WaveSubscription";
import { Carousel } from "react-bootstrap";

import i52 from "../assets/images/news1.png";
import i53 from "../assets/images/news2.png";
import i54 from "../assets/images/news3.png";
import i55 from "../assets/images/news4.png";
import i56 from "../assets/images/news5.png";
import i57 from "../assets/images/news6.png";
import i58 from "../assets/images/news7.png";
import i59 from "../assets/images/news8.png";
import i60 from "../assets/images/news9.png";
import i61 from "../assets/images/news10.png";
import i62 from "../assets/images/news11.png";
import i63 from "../assets/images/news12.png";
import i64 from "../assets/images/news13.png";
import i65 from "../assets/images/news14.png";
import i66 from "../assets/images/news15.png";
import i67 from "../assets/images/news16.png";
import i68 from "../assets/images/news17.png";
import i69 from "../assets/images/news18.png";
import i70 from "../assets/images/news19.png";
import i71 from "../assets/images/news20.png";
import i72 from "../assets/images/news21.png";

import { motion, useTransform, useScroll } from "framer-motion";

import TopLink from '../components/TopLink'

const Home = () => {
  const navigate = useNavigate();

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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

  const PresaleCard = ({ phase, price, cliff, vesting }) => {
    return (
      <div className="presale-card">
        <h2 className="presale-card__title">Presale Phase {phase}</h2>
        <div className="presale-card__divider"></div>

        <div className="presale-card__details">
          <div className="presale-card__detail-row">
            <span className="presale-card__label">Price</span>
            <span className="presale-card__value">{price}</span>
            <div className="presale-card__line"></div>
          </div>

          <div className="presale-card__detail-row">
            <span className="presale-card__label">Cliff</span>
            <span className="presale-card__value">{cliff}</span>
            <div className="presale-card__line"></div>
          </div>

          <div className="presale-card__detail-row">
            <span className="presale-card__label">Vesting</span>
            <span className="presale-card__value">{vesting}</span>
            <div className="presale-card__line"></div>
          </div>
        </div>

        <button className="presale-card__button">Buy Now</button>
      </div>
    );
  };

  return (
    <>
    <TopLink />
      <div className="container-fluid px-0">
        <Topnav2 />
        <div className="position-relative">
          <div className="position-absolute hero-text">
            <div className="custom-border rounded-pill d-flex align-items-center py-2 w-75 w-md-25 mx-auto mx-md-0 ">
              <div className="ms-3 badge rounded-pill text-bg-primary text-white">
                New
              </div>
              <p className="m-0 ps-3">Join the revolution now 🔥</p>
            </div>
            <h1 className="fw-bold g-text text-center text-md-start pt-4 big-font">
              Onewave The Multi-Chain
            </h1>
            <h1 className="fw-bold g-text text-center text-md-start big-font">
              Multi-Utility Platform
            </h1>
            <h1 className="fw-bold g-text text-center text-md-start big-font">
              For The Wab-3 World
            </h1>

            <p
              className="pt-4 m-0 text-center text-md-start"
              style={{ color: "#4d4d4d", fontSize:"1.1rem",fontWeight:"500"}}
            >
              Cutting-edge multichain, multi-utility cryptocurrency platform
              designed to provide <br /> users with a comprehensive suite of
              blockchain-based tools and services.
            </p>

            <div className="d-flex gap-3 pt-4">
              <button className="btn btn-primary px-5 py-3 " style={{fontSize:"1.2rem", fontWeight:"500"}}>
                <i className="fa-solid fa-cart-shopping me-2"></i> Presale
              </button>
              <button className="btn btn-light  px-5 py-3" style={{fontSize:"1.2rem", fontWeight:"500"}}>
                <i class="fa-solid fa-boxes-stacked me-2"></i> Staking
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
            <div className="container p-0">
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
          </div>
          <img className="frame-101" src={f101} alt="Bottom frame" />
        </div>

        {/* who we are */}
        <div className="container">
          <div className="welcome">
            <div className="welcome__image-container">
              <Spline
                className=" welcome__imag spline"
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
            <div className="d-flex">
              <motion.div
                initial={{ x: "0" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex-shrink-0"
              >
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
              </motion.div>
              <motion.div
                initial={{ x: "0" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex-shrink-0"
              >
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
              </motion.div>
            </div>
          </div>
          <img className="frame-102" src={f101} alt="Bottom frame" />
        </div>

        {/* utilities */}
        <div className="pt-5">
          <p className="text-center text-primary fw-semibold" style={{fontSize:"1.1rem"}}>UTILITIES</p>
          <h1 className="fw-bold g-text text-center mb-5">
            OneWave’s Innovative Utilities
          </h1>
        </div>
        <div className="container">
          <div class="frame-135">
            <div class="frame-134 w-100">
              <div class="frame-60 border-liner">
                <h4 className="text-center fw-bolder pt-5">Wave Blockchain</h4>
                {/* <div class="wave-blockchain"></div> */}

                <p className="text-center" style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img
                  class="_723-d-9-c-90-c-5-d-8-4-cd-6-9-d-44-51591-eb-8464-e-1"
                  src={i18}
                />
              </div>
              <div class="frame-118 border-liner">
                <h4 className="text-center fw-bolder pt-5">Crypto Gaming</h4>

                <p className="text-center" style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img
                  class="be-2-a-6-b-06-2-fa-9-442-e-b-2-a-0-583-f-15864963"
                  src={i19}
                />
              </div>
              <div class="frame-117 border-liner">
                <h4 className="text-center fw-bolder pt-5">
                  Wave NFT Marketplace
                </h4>

                <p className="text-center" style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>

                <img
                  class="d-793-f-9-bc-2206-4900-80-cc-3-e-2-a-1251714-b"
                  src={i20}
                />
              </div>
              <div class="frame-110 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">Wave Staking</h4>
                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img
                  class="b-23-a-9-d-38-5-b-11-4-ded-a-2-dd-bdbf-051-e-10-e-3"
                  src={i21}
                />
              </div>
              <div class="frame-119 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">
                  Wave FinLearn
                </h4>
                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img
                  class="f-3-e-1-ffa-2-66-b-9-4-c-98-a-13-e-d-9-ed-9-c-970655"
                  src={i22}
                />
              </div>
              <div class="frame-115 border-liner">
              <h4 className="text-center fw-bolder pt-5">Wave Wallet</h4>
                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
              </div>
              <div class="frame-116 border-liner">
              <h4 className="text-start ps-3 fw-bolder pt-5">Wave Card</h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <img
                  class="d-3580698-12-f-6-42-ff-946-d-5-c-3-ec-16-a-5-b-72"
                  src={i23}
                />
              </div>
              <div class="frame-113 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">
                  Wave Micro Tasks App
                </h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
              </div>
              <div class="frame-1152 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">
                  Wave Payment Gateway
                </h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
              </div>
              <div class="frame-121 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">
                  Wave AI Calling
                </h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
              </div>
              <div class="frame-122 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">
                  International Forex
                </h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
              </div>
              <div class="frame-123 border-liner">
                <div className="">
                  <h4 className="text-start fw-bolder pt-5 ps-3">
                    Wave Arbitrage Bot
                  </h4>

                  <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                </div>
              </div>
              <div class="frame-114">
                <h4 className="text-start fw-bolder pt-5 ps-3 text-white">
                  Wave Crypto Exchange
                </h4>

                <p
                  className="text-start ps-3"
                  style={{ color: "#717171",fontSize:"1rem", fontWeight:"500" }}
                >
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>
                <p class="fw-bold text-white ps-3">
                  Learn More
                </p>
                <img
                  class="_723-d-9-c-90-c-5-d-8-4-cd-6-9-d-44-51591-eb-8464-e-4"
                  src={i24}
                />
              </div>
            </div>
          </div>
        </div>

        {/* presale part */}

        <div className="container larg-p">
          <div class="presale">
            <div class="ellipse-4"></div>
            <div class="ellipse-5"></div>
            <img
              class="group-4 img-fluid z-2"
              style={{ top: "-1px" }}
              src={i25}
            />
            <img src={i26} className="floating-asset asset26" alt="i1" />
            <img src={i27} className="floating-asset asset27" alt="i1" />
            <img src={i28} className="floating-asset asset28" alt="i1" />
            <img src={i29} className="floating-asset asset29" alt="i1" />
            <img src={i30} className="floating-asset asset30" alt="i1" />
            <img src={i31} className="floating-asset asset31" alt="i1" />
            <img src={i32} className="floating-asset asset32" alt="i1" />
            <img src={i33} className="floating-asset asset33" alt="i1" />
            <img src={i34} className="floating-asset asset34" alt="i1" />
            <img src={i35} className="floating-asset asset35 z-2" alt="i1" />
            <img src={i38} className="floating-asset asset37" alt="i1" />

            <p className="text-center pt-5 text-primary fw-semibold"style={{fontSize:"1.1rem"}}>PRESALE2025</p>
            <h1 className="text-center fw-bolder g-text">
              World's First Real World Assets (RWA)
            </h1>
            <h1 className="text-center fw-bolder g-text">Backed Presale</h1>
            <p className="text-center text-secondary fw-semibold">
              OneWave Presale sets a new benchmark in crypto—backed by
              real-world assets <br /> like gold, silver, and certified gems for
              unmatched trust and value.
            </p>
            <div className="container px-0 py-5 mt-5 z-0">
              <div className="row gx-4 justify-content-center">
                {/* <!-- Repeat for each presale card --> */}
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="presale-card position-relative bg-white rounded-4 shadow-sm p-3">
                    <h4 className="fw-bold mb-4">Presale Phase 1</h4>
                    <hr className="" />
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Price</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">$0.2</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Cliff</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">12 Months</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Vesting</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">5% X 20 Months</span>
                    </div>
                    <div className="text-center pt-3">
                      <button
                        className="btn btn-primary w-100 fw-bold"
                        onClick={() => navigate("/presale")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="presale-card position-relative bg-white rounded-4 shadow-sm p-3">
                    <h4 className="fw-bold mb-4">Presale Phase 2</h4>
                    <hr className="" />
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Price</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">$0.4</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Cliff</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">9 Months</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Vesting</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">5% X 20 Months</span>
                    </div>
                    <div className="text-center pt-3">
                      <button
                        className="btn btn-primary w-100 fw-bold"
                        onClick={() => navigate("/presale")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="presale-card position-relative bg-white rounded-4 shadow-sm p-3">
                    <h4 className="fw-bold mb-4">Presale Phase 3</h4>
                    <hr className="" />
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Price</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">$0.6</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Cliff</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">6 Months</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Vesting</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">5% X 20 Months</span>
                    </div>
                    <div className="text-center pt-3">
                      <button
                        className="btn btn-primary w-100 fw-bold"
                        onClick={() => navigate("/presale")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                  <div className="presale-card position-relative bg-white rounded-4 shadow-sm p-3">
                    <h4 className="fw-bold mb-4">Presale Phase 4</h4>
                    <hr className="" />
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Price</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">$0.8</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Cliff</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">3 Months</span>
                    </div>
                    <div className="info-row d-flex py-2">
                      <span className="label me-auto">Vesting</span>
                      <div className="flex-grow-1 mx-2 dor-range"></div>{" "}
                      {/* dynamic spacer */}
                      <span className="value">5% X 20 Months</span>
                    </div>
                    <div className="text-center pt-3">
                      <button
                        className="btn btn-primary w-100 fw-bold"
                        onClick={() => navigate("/presale")}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* chart */}
        <div className="container pt-5">
          <p className="text-center pt-5 text-primary fw-bold">TOKENOMICS</p>
          <h1 className="text-center fw-bolder g-text">
            Fueling the Ecosystem
          </h1>
          <p className="text-center text-secondary">
            The Wave Token (WAVE) is the backbone of our ecosystem, designed to
            power transactions, rewards, <br />
            and governance acrossthe platform.
          </p>
          <div className="row pt-5">
            <div className="col-12 position-relative">
              <PieChart />
              <div className="position-absolute grop-1">
                <img src={i44} className="img-fluid" alt="" />
              </div>
              <div className="position-absolute grop-2">
                <img src={i45} className="img-fluid" alt="" />
              </div>

              <div className="position-absolute grop-3">
                <div class="frame-1597880379">
                  <div class="frame-68">
                    <div class="rectangle-6"></div>
                    <div class="rectangle-1611238367"></div>
                    <div class="frame-75">
                      <div class="binance-smart-chain">Binance Smart Chain</div>
                      <div class="_25">25%</div>
                    </div>

                    <div class="frame-72">
                      <img class="binance-svgrepo-com-1" src={i46} />
                    </div>
                  </div>
                  <div class="frame-69">
                    <div class="rectangle-7"></div>
                    <div class="rectangle-16112383627"></div>
                    <div class="frame-73">
                      <div class="eth-svgrepo-com-1">
                        <img class="group" src={i47} />
                      </div>
                    </div>
                    <div class="frame-74">
                      <div class="_252">25%</div>
                      <div class="ethereum">Ethereum</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="position-absolute grop-4">
                <div class="frame-1597880378">
                  <div class="frame-70">
                    <div class="rectangle-4"></div>
                    <div class="rectangle-161123836"></div>
                    <div class="frame-77">
                      <div class="polygon-network">Polygon Network</div>
                      <div class="_25">25%</div>
                    </div>
                    <div class="frame-78">
                      <img class="polygon-matic-logo-1" src={i48} />
                    </div>
                  </div>
                  <div class="frame-71">
                    <div class="rectangle-5"></div>
                    <div class="rectangle-1611238362"></div>
                    <div class="frame-76">
                      <div class="_252">25%</div>
                      <div class="lycan-chain">Lycan Chain</div>
                    </div>
                    <img class="_32568-1" src={i49} />
                  </div>
                </div>
              </div>

              <div className="position-absolute grop-5 w-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex">
                    <img class="binance-svgrepo-com-1" src={i46} />
                    <div class="frame-1597880458">
                      <div class="binance-smart-chain5">
                        Binance Smart Chain
                      </div>
                      <div class="_255">25%</div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div class="frame-1597880459">
                      <div class="ethereum25">Ethereum</div>
                      <div class="_2525">25%</div>
                    </div>
                    <img
                      class="group position-relative top-0 start-0 end-0 bottom-0"
                      src={i47}
                    />
                  </div>
                </div>
              </div>

              <div className="grop-6 w-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex">
                    <img class="binance-svgrepo-com-1 me-1" src={i48} />
                    <div class="frame-1597880458">
                      <div class="polygon-network35">Polygon Network</div>
                      <div class="_2535">25%</div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div class="frame-1597880459">
                      <div class="lycan-chain45">Lycan Chain</div>
                      <div class="_2545">25%</div>
                    </div>
                    <img
                      class="group position-relative top-0 start-0 end-0 bottom-0"
                      src={i49}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* q1 q2 */}

        <div className="container pt-5 mt-5">
          <div className="roadmap" style={{ height: "300vh" }}>
            <div className="frame-86" ref={targetRef} style={{ height: "300vh" }} >
              <p className="text-center pt-5 text-primary fw-bold">ROADMAP</p>
              <h1 className="text-center fw-bolder g-text">
                Milestones And Future Plans
              </h1>

              <div className="ellipse-7"></div>
              <div className="ellipse-6"></div>

              <section
                className=""
                style={{ height: "300vh" }}
              >
                <div className="position-sticky top-0 d-flex align-items-center overflow-x-hidden">
                  <motion.div style={{ x }} className="d-flex gap-4">
                    {/* Q1 */}
                    <div className="frame-97">
                      <div className="frame-96">
                        <div className="q-1-2025">Q1 - 2025</div>
                        <div className="launch-of-the-one-wave-platform-community-airdrop-through-tap-to-earn-games-presale-staking-launch-for-the-wave-token-introduction-of-rwa-backed-presale-and-staking-release-of-the-wave-wallet-app-for-easy-crypto-management">
                          - Launch of the OneWave Platform <br />
                          - Community Airdrop through tap-to-earn games. <br />
                          - Presale & Staking launch for the WAVE token. <br />
                          - Introduction of RWA backed Presale and Staking{" "}
                          <br />- Release of the Wave Wallet App for easy crypto
                          management.
                        </div>
                        {/* <div className="rectangle-8"></div> */}
                      </div>
                      <img className="line-1" src="line-10.svg" alt="line-1" />
                    </div>

                    {/* Q2 */}
                    <div className="frame-98">
                      <div className="q-2-2025">Q2 - 2025</div>
                      <div className="listing-on-tracking-sites-like-coin-market-cap-cmc-and-coin-gecko-cg-listing-on-launchpads-for-wider-accessibility-integration-of-crypto-gaming-utilities-for-play-to-earn-and-tap-to-earn-launch-of-the-wave-crypto-card-for-seamless-spending-introduction-of-the-crypto-payment-gateway-for-businesses-listing-on-multiple-reputed-crypto-exchanges-for-liquidity">
                        - Listing on Tracking Sites like CoinMarketCap (CMC) and
                        CoinGecko (CG). <br />
                        - Listing on Launchpads for wider accessibility. <br />
                        - Integration of Crypto Gaming Utilities for
                        play-to-earn and tap-to-earn. <br />
                        - Launch of the Wave Crypto Card for seamless spending.{" "}
                        <br />
                        - Introduction of the Crypto Payment Gateway for
                        businesses. <br />- Listing on Multiple Reputed Crypto
                        Exchanges for liquidity.
                      </div>
                      <img className="line-2" src="line-20.svg" alt="line-2" />
                    </div>

                    {/* Q3 */}
                    <div className="frame-99">
                      <div className="q-3-2025">Q3 - 2025</div>
                      <div className="arbitrage-bot-utility-through-a-subscription-model-launch-of-the-traditional-staking-platform-for-passive-income-introduction-of-the-nft-marketplace-for-digital-asset-trading">
                        - Arbitrage Bot Utility through a subscription model.{" "}
                        <br />
                        - Launch of the Traditional Staking Platform for passive
                        income. <br />- Introduction of the NFT Marketplace for
                        digital asset trading.
                      </div>
                      <img className="line-22" src="line-21.svg" alt="line-3" />
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>

            <img className="frame-107" src={i50} alt="frame-107" />
            <img className="group-5 img-fluid" src={i51} alt="group-5" />
          </div>
        </div>

        {/* team */}
        <div className="container py-5">
          <p className="text-center pt-5 text-primary fw-bold">OUR TEAM</p>
          <h1 className="text-center fw-bolder g-text">
            Meet the experts behind Wave's success
          </h1>
          <div className="d-none d-md-flex justify-content-center align-items-start gap-3">
            <div style={{ width: "20%", maxWidth: "100%" }}>
              <div className="card shadow-none border-0">
                <div className="card-body">
                  <div className="text-center">
                    <img src={i39} className=" rounded-circle" alt="" />
                  </div>
                  <h5 className="text-center">
                    Mr.Mohmmad abd al azez Mahmod (ORWA)
                  </h5>
                  <p className="text-center text-secondary">
                    Co-Founder & CEO (Turkey)
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "20%", maxWidth: "100%" }}>
              <div className="card shadow-none border-0">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={i40}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "150px" }}
                    />
                  </div>
                  <h5 className="text-center">Mr. Vishwa Badal</h5>
                  <p className="text-center text-secondary">
                    Co-Founder & COO (India)
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "20%", maxWidth: "100%" }}>
              <div className="card shadow-none border-0">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={i41}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "150px" }}
                    />
                  </div>
                  <h5 className="text-center">Mr. Tridib Nandy</h5>
                  <p className="text-center text-secondary">
                    Social Advisor (United States)
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "20%", maxWidth: "100%" }}>
              <div className="card shadow-none border-0">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={i42}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "150px" }}
                    />
                  </div>
                  <h5 className="text-center">Mr. Arvind Kumar</h5>
                  <p className="text-center text-secondary">
                    Chief Technical Advisor (Hong Kong)
                  </p>
                </div>
              </div>
            </div>
            <div style={{ width: "20%", maxWidth: "100%" }}>
              <div className="card shadow-none border-0">
                <div className="card-body">
                  <div className="text-center">
                    <img
                      src={i43}
                      className="rounded-circle"
                      alt=""
                      style={{ width: "150px" }}
                    />
                  </div>
                  <h5 className="text-center">Mr. Victor Diakov</h5>
                  <p className="text-center text-secondary">
                    Regional Advisor - CIS Countries (Russia)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-md-none d-grid pt-5">
            <Carousel className="">
              <Carousel.Item>
                <div className="card shadow-none border-0">
                  <div className="card-body">
                    <div className="text-center">
                      <img src={i39} className=" rounded-circle" alt="" />
                    </div>
                    <h5 className="text-center">
                      Mr.Mohmmad abd al azez Mahmod (ORWA)
                    </h5>
                    <p className="text-center text-secondary">
                      Co-Founder & CEO (Turkey)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card shadow-none border-0">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={i40}
                        className="rounded-circle"
                        alt=""
                        style={{ width: "150px" }}
                      />
                    </div>
                    <h5 className="text-center">Mr. Vishwa Badal</h5>
                    <p className="text-center text-secondary">
                      Co-Founder & COO (India)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card shadow-none border-0">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={i41}
                        className="rounded-circle"
                        alt=""
                        style={{ width: "150px" }}
                      />
                    </div>
                    <h5 className="text-center">Mr. Tridib Nandy</h5>
                    <p className="text-center text-secondary">
                      Social Advisor (United States)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card shadow-none border-0">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={i42}
                        className="rounded-circle"
                        alt=""
                        style={{ width: "150px" }}
                      />
                    </div>
                    <h5 className="text-center">Mr. Arvind Kumar</h5>
                    <p className="text-center text-secondary">
                      Chief Technical Advisor (Hong Kong)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="card shadow-none border-0">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src={i43}
                        className="rounded-circle"
                        alt=""
                        style={{ width: "150px" }}
                      />
                    </div>
                    <h5 className="text-center">Mr. Victor Diakov</h5>
                    <p className="text-center text-secondary">
                      Regional Advisor - CIS Countries (Russia)
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* news */}
        <div className="container py-5">
          <p className="text-center pt-5 text-primary fw-bold">
            NEWS AND MEDIA
          </p>
          <h1 className="text-center fw-bolder g-text">
            Featured by Top Publications Around the World
          </h1>
          <div class="featured-in shadow-none">
            <div class="frame-1597880383 shadow-none">
              <div class="frame-41 shadow-none">
                <div class="frame-39 shadow-none">
                  <div className="d-flex">
                    <motion.div
                      initial={{ x: "0" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-27">
                        <img class="image-8" src={i52} />
                      </div>
                      <div class="frame-412">
                        <img class="image" src={i53} />
                      </div>
                      <div class="frame-28">
                        <img class="image2" src={i54} />
                      </div>
                      <div class="frame-35">
                        <img class="image3" src={i55} />
                      </div>
                      <div class="frame-36">
                        <img class="image4" src={i56} />
                      </div>
                      <div class="frame-37">
                        <img class="image-10" src={i57} />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: "0" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-27">
                        <img class="image-8" src={i52} />
                      </div>
                      <div class="frame-412">
                        <img class="image" src={i53} />
                      </div>
                      <div class="frame-28">
                        <img class="image2" src={i54} />
                      </div>
                      <div class="frame-35">
                        <img class="image3" src={i55} />
                      </div>
                      <div class="frame-36">
                        <img class="image4" src={i56} />
                      </div>
                      <div class="frame-37">
                        <img class="image-10" src={i57} />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="frame-402">
                  <div className="d-flex">
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "0" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-362">
                        <img class="frame" src={i58} />
                      </div>
                      <div class="frame-393">
                        <div class="frame2">
                          <img class="frame-45" src={i59} />
                        </div>
                      </div>
                      <div class="frame-372">
                        <img class="frame3" src={i60} />
                      </div>
                      <div class="frame-38">
                        <img class="frame4" src={i61} />
                      </div>
                      <div class="frame-40">
                        <img class="image-31" src={i62} />
                      </div>
                      <div class="frame-452">
                        <img class="image7" src={i63} />
                      </div>
                      <div class="frame-46">
                        <img class="image7" src={i64} />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: "-100%" }}
                      animate={{ x: "0" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-362">
                        <img class="frame" src={i58} />
                      </div>
                      <div class="frame-393">
                        <div class="frame2">
                          <img class="frame-45" src={i59} />
                        </div>
                      </div>
                      <div class="frame-372">
                        <img class="frame3" src={i60} />
                      </div>
                      <div class="frame-38">
                        <img class="frame4" src={i61} />
                      </div>
                      <div class="frame-40">
                        <img class="image-31" src={i62} />
                      </div>
                      <div class="frame-452">
                        <img class="image7" src={i63} />
                      </div>
                      <div class="frame-46">
                        <img class="image7" src={i64} />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div class="frame-413">
                  <div className="d-flex">
                    <motion.div
                      initial={{ x: "0" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-27">
                        <img class="image-8" src={i65} />
                      </div>
                      <div class="frame-412">
                        <img class="image8" src={i66} />
                      </div>
                      <div class="frame-28">
                        <img class="image-9" src={i67} />
                      </div>
                      <div class="frame-35">
                        <img class="image9" src={i68} />
                      </div>
                      <div class="frame-36">
                        <img class="image-10" src={i69} />
                      </div>
                      <div class="frame-37">
                        <img class="image6" src={i70} />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ x: "0" }}
                      animate={{ x: "-100%" }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="d-flex gap-3 flex-shrink-0 m-2"
                    >
                      <div class="frame-27">
                        <img class="image-8" src={i65} />
                      </div>
                      <div class="frame-412">
                        <img class="image8" src={i66} />
                      </div>
                      <div class="frame-28">
                        <img class="image-9" src={i67} />
                      </div>
                      <div class="frame-35">
                        <img class="image9" src={i68} />
                      </div>
                      <div class="frame-36">
                        <img class="image-10" src={i69} />
                      </div>
                      <div class="frame-37">
                        <img class="image6" src={i70} />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <WaveSubscription />
        <Footer />
      </div>
    </>
  );
};

export default Home;
