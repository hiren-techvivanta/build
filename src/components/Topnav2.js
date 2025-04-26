import React from 'react'
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Topnav2 = () => {
    const navigate = useNavigate();
  return (
    <>
          <nav class="navbar navbar-expand-lg blur-bg position-absolute w-100 start-0">
        <div class="container position-relative z-2">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Wave Logo"
            style={{maxWidth:"120px"}}
            className="img-fluid"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown px-2">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Utilities
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown px-2">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item px-2">
          <a class="nav-link " href="#">Lern</a>
        </li>
        <li class="nav-item px-2">
          <Link class="nav-link " to="/presale">Presele</Link>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Staking</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Roadmap</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Tokenomics</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Team</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Downloads</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link " href="#">Contact</a>
        </li>
            </ul>
              <button class="rounded-2 custom-login px-4 py-2" type="submit" onClick={() => navigate("/signin")}>
                Login
              </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topnav2