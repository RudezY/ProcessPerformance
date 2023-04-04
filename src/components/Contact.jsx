import React from "react";

function Contact() {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b53]">
        Contact
      </h1>
      <div className="flex flex-col py-2">
       
          <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
            Cell : 714 403 6549
          </h2>
      
      </div>
      <div className="flex flex-col py-2">
    
          <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
            Fax: 714 730 6829
          </h2>
   
      </div>
      <div className="flex flex-col py-2">
        <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
          13681 Newport Ave
        </h2>
        <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
          Suite 8/310
        </h2>
        <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
          Tustin CA 92780
        </h2>
      </div>
      <div className="flex flex-col py-2">
        <h2 className="py-4 text-4xl font-bold text-center text-[#001b53]">
          <a href="mailto:neale@processperformance.info">Click to email me!</a>
        </h2>
      </div>
    </div>
  );
}

export default Contact;
