import Image from "next/image";
import Link from "next/link";
import icon from "../assets/icon2.png";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";


const Main = () => {
  return (
    <div id="home" className="w-screen h-screen text-center">
      <div className="w-4/5 h-screen mx-auto p-2 flex flex-col md:flex-row ">
        <div className="mt-20 md:w-1/2 flex flex-col justify-center ">
          <div className="text-left cursor-default ">
            <motion.h2
              className="py-4 text-gray-500 text-3xl font-normal md:pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Hi, I'm
              <span id="n" className="text-[#f5c000] font-medium">
                {" "}
                Rushad
              </span>{" "}
              🙋‍♂️
            </motion.h2>
            <motion.h2
              className="font-YesevaOne py-2 text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <RoughNotation
                type="highlight"
                show={true}
                color="#fff176"
                animationDuration="2000"
                animationDelay="2000"
              >
                Front-End Web Developer
              </RoughNotation>
            </motion.h2>
            <motion.h3
              className="py-4 font-medium text-gray-500 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2 }}
            >
              <p className="font-normal text-gray-600 tracking-normal">
                I love creating websites that make people happy and help
                businesses succeed! I specialize in crafting user-friendly
                interfaces and building front-end features that keep users
                engaged and coming back for more. Let's work together to create
                a website that's not only effective but also a joy to use!
              </p>
            </motion.h3>
          </div>
          <motion.div
            className="hidden lg:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
          >
            <Link href="/#projects">
              <button className="flex items-center border-2 border-black bg-[#fff176]  text-black font-medium py-2 px-4 hover:bg-[#f5c000] rounded-full cursor-pointer duration-200 delay-100">
                <span>View my work</span>
                <MdWork className="ml-2 text-lg" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="flex lg:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2 }}
          >
            <Link href="/#mobile">
              <button className="flex items-center border-2 border-black bg-[#fff176]  text-black font-medium py-2 px-4 hover:bg-[#f5c000] rounded-full cursor-pointer duration-200 delay-100">
                <span>View my work</span>
                <MdWork className="ml-2 text-lg" />
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center ">
          <Image
            src={icon}
            alt="Picture of the something nice"
            width={500}
            height={500}
            responsive
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

{
  /* <div className="">
  <h2 className="py-4 text-gray-500 text-3xl">
    Hi, I'm <span className="text-[#eeba0b]">Rushad</span>
  </h2>
  <h2 className="font-YesevaOne py-2 text-black">A Front-End Web Developer</h2>
  <h3 className="py-4 text-gray-500">
    I design and build user-centric digital products to help people and brands
    reach their goals. Specializing in UX and front-end development, I create
    engaging and effective online experiences.
  </h3>
</div>; */
}
