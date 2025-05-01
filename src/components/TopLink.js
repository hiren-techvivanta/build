import React from "react";
import i1 from '../assets/images/1 923.png'

const TopLink = () => {
  return (
    <>
      <div class="top-notification-bar">
     <div className="d-flex justify-content-between w-100">
     <img class="_1-923" src={i1} />
     <img class="_1-922" src={i1} />
     </div>
        <div class="frame-20">
          <div class="join-world-s-first-rwa-backed-presale">
            Join World’s First RWA Backed Presale
          </div>
          <i class="fa-solid fa-turn-up text-white"></i>
          {/* <img class="frame" src="frame0.svg" /> */}
        </div>
      </div>
    </>
  );
};

export default TopLink;
