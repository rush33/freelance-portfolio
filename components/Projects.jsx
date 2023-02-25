import { ImGithub, ImLink } from "react-icons/im";
import Image from "next/image";
import nft from "../public/assets/nft.png";
import jetty from "../public/assets/jetty.png";
import pizza from "../public/assets/pizza.png";
import { RoughNotation } from "react-rough-notation";

const Projects = () => {
  return (
    <div id="projects" className="flex">
      <div className="w-4/5  mx-auto  mt-20 ">
        {/* top */}
        <div className="flex flex-col">
          <p className="font-medium text-xl tracking-widest uppercase text-black">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fff176"
              animationDuration="2000"
              animationDelay="1500"
            >
              Works &
            </RoughNotation>
          </p>
          <h2> Projects</h2>
        </div>
        {/* bottom */}
        <div className="p-5 my-6 sm:p-0 flex justify-evenly items-center gap-8 flex-wrap">
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* card1 */}
            <div class="rounded overflow-hidden shadow-lg">
              <Image src={nft} width="500" height="500" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Landing Page</div>
                <p class="text-gray-700 text-base">
                  Modern, responsive landing page with animations.
                </p>
              </div>
              <div class="px-6 pb-4 ">
                <div className="flex justify-evenly">
                  <a
                    href="https://showcasenft.vercel.app/"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bbg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div class="rounded overflow-hidden shadow-lg">
              <Image src={jetty} width="500" height="500" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Payment Page</div>
                <p class="text-gray-700 text-base">
                  Responsive demo pricing page with beautiful transition
                  animations.
                </p>
              </div>
              <div class="px-6 pb-4 ">
                <div className="flex justify-evenly">
                  <a
                    href="https://jetty.netlify.app/"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bbg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* card 3*/}
            <div class="rounded overflow-hidden shadow-lg">
              <Image src={pizza} width="500" height="500" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Restaurant Website</div>
                <p class="text-gray-700 text-base">
                  Front-end of a restaurant website with product, cart etc
                  pages.
                </p>
              </div>
              <div class="px-6 pb-4 ">
                <div className="flex justify-evenly">
                  <a
                    href="https://lamapizza.netlify.app/"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bbg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
