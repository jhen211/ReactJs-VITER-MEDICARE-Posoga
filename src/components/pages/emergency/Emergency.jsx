import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineRectangleStack } from "react-icons/hi2";

const Emergency = () => {
  return (
    <>
      {/* Emergency */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="grid grid-cols-2 justify-items-center  ">
          <div className="justify-items-center">
            <FaAmbulance className="size-20 text-white mt-24" />
          </div>
          <div>
            <h1 className="text-white font-bold text-2xl">
              24/7 Emergency Services
            </h1>
            <p className="text-white max-w-96 py-7">
              Our Emergency department is staffed around the clock with
              experienced medical professionals ready to handle any medical
              crisis
            </p>

            <div className="Mt-5">
              <div className="flex gap-3 mt-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <AiOutlineClockCircle />
                </div>
                <p>Immediate response to critical conditions</p>
              </div>
            </div>
            <div className="Mt-5">
              <div className="flex gap-3 mt-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <HiOutlineRectangleStack />
                </div>
                <p>State-of-the-art emergency facilities</p>
              </div>
            </div>
            <div className="Mt-5">
              <div className="flex gap-3 mt-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <HiOutlinePhone />
                </div>
                <p>Emergency hotline: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
