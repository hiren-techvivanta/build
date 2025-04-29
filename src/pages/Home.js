import React, { useEffect } from "react";
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

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import i39 from "../assets/images/Team1.png";
import i40 from "../assets/images/Team2.png";
import i41 from "../assets/images/Team3.png";
import i42 from "../assets/images/Team4.png";
import i43 from "../assets/images/Team5.png";

const Home = () => {
  const navigate = useNavigate();
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

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
    },
    tooltip: {
      valueSuffix: "%",
    },
    // subtitle: {
    //     text:
    //     'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    // },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: [
          {
            enabled: true,
            distance: 20,
          },
          {
            enabled: true,
            distance: -40,
            format: "{point.percentage:.1f}%",
            style: {
              // fontSize: "1.2em",
              textOutline: "none",
              opacity: 0.7,
            },
            filter: {
              operator: ">",
              property: "percentage",
              value: 1,
            },
          },
        ],
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "Pre-sale & Fairsale",
            y: 23,
          },
          {
            name: "Staking Rewards",
            // sliced: true,
            // selected: true,
            y: 15,
          },
          {
            name: "Team",
            y: 8,
          },
          {
            name: "Advisors",
            y: 5,
          },
          {
            name: "Marketing",
            y: 12,
          },
          {
            name: "Airdrop",
            y: 4,
          },
          {
            name: "Ecosystem Devlopment",
            y: 17,
          },
          {
            name: "Liquidity",
            y: 16,
          },
        ],
      },
    ],
  };

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
        {/* test */}

        <div className="container">
          <div class="frame-135">
            <div class="frame-134 w-100">
              <div class="frame-60 border-liner">
                <h4 className="text-center fw-bolder pt-5">Wave Blockchain</h4>
                {/* <div class="wave-blockchain"></div> */}

                <p className="text-center fs-5" style={{ color: "#717171" }}>
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

                <p className="text-center fs-5" style={{ color: "#717171" }}>
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

                <p className="text-center fs-5" style={{ color: "#717171" }}>
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                <div class="wave-wallet">Wave Wallet</div>
                <div class="lorem-ipsum-dolor-sit-amet-this-is-is-only-dummy-text-we-will-replace-this-with-real-one-later2">
                  Lorem Ipsum dolor sit amet, This is
                  <br />
                  is only dummy text. We will
                  <br />
                  replace this with real one later.
                </div>
              </div>
              <div class="frame-116 border-liner">
                <h4 className="text-start fw-bolder pt-5 ps-3">Wave Card</h4>

                <p
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                  className="text-start fs-5 ps-3"
                  style={{ color: "#717171" }}
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
                    className="text-start fs-5 ps-3"
                    style={{ color: "#717171" }}
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

                <p className="text-start fs-5 ps-3" style={{ color: "#fff" }}>
                  Lorem Ipsum dolor sit amet, This is <br />
                  is only dummy text. We will <br />
                  replace this with real one later.
                </p>

                <p class="fw-bold text-white ps-3 text-decoration-underline">
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

        <div className="container">
          <div class="presale mt-5">
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

            <p className="text-center pt-5 text-primary fw-bold">PRESALE2025</p>
            <h1 className="text-center fw-bolder g-text">
              World's First Real World Assets (RWA)
            </h1>
            <h1 className="text-center fw-bolder g-text">Backed Presale</h1>
            <p className="text-center text-secondary">
              OneWave Presale sets a new benchmark in crypto—backed by
              real-world assets <br /> like gold, silver, and certified gems for
              unmatched trust and value.
            </p>
            <div className="container-fluid  py-5 mt-5 z-0">
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
          <div className="row">
            <div className="col12">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </div>
        </div>

        {/* team */}
        <div className="container py-5">
          <p className="text-center pt-5 text-primary fw-bold">OUR TEAM</p>
          <h1 className="text-center fw-bolder g-text">
            Meet the experts behind Wave's success
          </h1>
          <div className="d-flex justify-content-center align-items-start gap-3">
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
        </div>
      </div>
    </>
  );
};

export default Home;
