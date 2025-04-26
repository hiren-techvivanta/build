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

const Home = () => {
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
                    <img
                      src={i1}
                      alt="Community icon 1"
                    />
                  </div>
                  <div className="icon-box blue-box">
                    <img
                      src={i2}
                      alt="Community icon 2"
                    />
                  </div>
                  <div className="icon-box white-box">
                    <img
                      src={i3}
                      alt="Community icon 3"
                    />
                  </div>
                  <div className="icon-box white-box">
                    <img
                      src={i3}
                      alt="Community icon 4"
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
                      <img src={i5}alt="Listing 2" />
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
          <img
            className="frame-101"
            src="/images/bottom-frame.svg"
            alt="Bottom frame"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
