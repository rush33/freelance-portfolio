import React from "react";
import { motion, useInView } from "framer-motion";
import { RoughNotation } from "react-rough-notation";


const Skills = () => {

  return (
    <div id="skills" className="w-4/5 py-24 mx-auto">
      <div className="mx-auto flex flex-col flex-start">
        <p className="text-xl font-medium tracking-widest uppercase text-black ">
          <RoughNotation
            type="highlight"
            show={true}
            color="#fff176"
            animationDuration="2000"
            animationDelay="1500"
          >
            How I will
          </RoughNotation>
        </p>
        <h2>Grow your business</h2>

        <div class="p-5 my-6 sm:flex sm:flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl">⚡</h3>
            <h3 className="text-2xl">
              {" "}
              {/* <SiPytorchlightning className="my-1 text-2xl text-red-500" /> */}
              Boost Your Online Presence
            </h3>
            <p class="text-gray-600  tracking-normal mb-4 mt-2 text-lg">
              With a modern website, I can help you attract more visitors and
              increase your online visibility.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl">📈</h3>
            <h3 className="text-2xl">
              {/* <SlGraph className="my-1 text-2xl text-lime-600" /> */}
              Increase Your Sales
            </h3>
            <p class="text-gray-600 tracking-normal mb-4 mt-2 text-lg">
              I can design an effective website with optimized call-to-action
              buttons to help you turn more visitors into paying customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl">😀</h3>
            <h3 className="text-2xl">
              {/* <RiUserSmileFill className="my-1 text-2xl text-amber-400" /> */}
              Enhance User Experience
            </h3>
            <p class="text-gray-600 tracking-normal mb-4 mt-2 text-lg">
              I will design a website that is easy to navigate, visually
              appealing, and provides a great user experience to help you retain
              and attract more customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl">🔝</h3>
            <h3 className="text-2xl">
              {/* <SiPytorchlightning className="my-1 text-2xl" /> */}
              Get Ahead of the Competition
            </h3>
            <p class="text-gray-600 tracking-normal mb-4 mt-2 text-lg">
              With a modern, mobile-friendly website, I can help you stay ahead
              of the curve and gain a competitive advantage in your industry.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
