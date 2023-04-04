import React from "react";
import ThanksItem from "./Thanksitems";
import srix from "../assets/srix.png";
import performance from "../assets/performance.jpg";
import oakley from "../assets/oakley.png";
import nexbelt from "../assets/nexbelt.png";

export default function Thanks() {
  return (
    <div id="thanks" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        A special thanks to
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, enim
        distinctio. Odit unde minima ipsam atque autem blanditiis assumenda
        quos, sapiente laboriosam, iusto nihil eius! Dolorum architecto totam
        ullam iusto.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a
          href="https://www.srixon-share.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThanksItem img={srix} title="Srixon" />
        </a>
        <a
          href="https://www.oakley.com/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThanksItem img={oakley} title="Oakley" />
        </a>
        <a
          href="https://www.nexbelt.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThanksItem img={nexbelt} title="Nexbelt" />
        </a>
        <a
          href="https://performhealthwellness.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ThanksItem img={performance} title="Performance Health & Wellness" />
        </a>
      </div>
    </div>
  );
}
