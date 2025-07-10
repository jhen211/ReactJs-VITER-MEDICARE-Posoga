import React from "react";
import { FaPills } from "react-icons/fa";

const Pharmacy = () => {
  return (
    <>
      {/* Pharmacy */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 justify-items-center">
            <div>
              <h1 className="text-blue-700 font-bold text-2xl mt-10">
                In-House Pharmacy
              </h1>
              <p className=" max-w-96 py-5">
                Our fully-stocked pharmacy provides convenient access to
                medications with expert advice from our licensed pharmacists.
              </p>
              <div className="Mt-5">
                <div className="flex gap-3 mt-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaPills className="text-blue-800 text-lg font-bold" />
                  </div>
                  <div>
                    <h5 className="text-blue-700 font-bold">
                      Prescription Medications
                    </h5>
                    <p>Fast filling of all your prescription needs</p>
                  </div>
                </div>
              </div>
              <div className="Mt-5">
                <div className="flex gap-3 mt-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaPills className="text-blue-800 text-lg font-bold" />
                  </div>
                  <div>
                    <h5 className="text-blue-700 font-bold">
                      Over-the-Counter
                    </h5>
                    <p>Wide selection of health and wellness products</p>
                  </div>
                </div>
              </div>
              <div className="Mt-5">
                <div className="flex gap-3 mt-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <FaPills className="text-blue-800 text-lg font-bold" />
                  </div>
                  <div>
                    <h5 className="text-blue-700 font-bold">
                      Compounding Services
                    </h5>
                    <p>Custom medication formulations when needed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FaPills className="size-32 mt-40 text-blue-700 bg-blue-100 p-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pharmacy;
