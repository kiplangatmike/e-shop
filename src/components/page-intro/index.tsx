import { Swiper, SwiperSlide } from "swiper/react";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
export default function PageIntro() {
  return (
    <section className="items-center">
      <Swiper
        className="mx-auto max-w-[1440px] overflow-x-auto relative"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide className="w-64 flex-shrink-0">
          <div
            className="bg-cover bg-center bg-no-repeat h-[80vh] items-center flex "
            style={{ backgroundImage: "url('images/slide-1.jpg')" }}
          >
            <div className="relative ">
              <div className="relative justify-center mt-auto -mb-[80px] ml-10">
                <h2 className="text-white text-5xl align-bottom justify-center pl-3">
                  African Summer Sales
                </h2>
              </div>
            </div>
          </div>{" "}
          <div className="absolute z-50 bg-white bottom-0  right-0 rounded-tl-[30px] p-10">
            <div>
              <ul className="flex z-50 gap-10 text-[#333333]">
                <li className="z-50 flex gap-3">
                  <div className="bg-[#fff3df] p-2 rounded-md">
                    <FaShippingFast size={25} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">Free Shipping</h4>
                    <p className="text-[12px]">On purchase over Rwf 20,000</p>
                  </div>
                </li>
                <li className="flex gap-3">
                <div className="bg-[#fff3df] p-2 rounded-md">
                  <FaShippingFast size={25} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">99% Satisfied Customers</h4>
                    <p className="text-[12px]">Our clients&apos; opinions speak for themselves</p>
                  </div>
                </li>
                <li className="flex gap-3">
                <div className="bg-[#fff3df] p-2 rounded-md">
                  <AiOutlineSafety size={25} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold">Originality Guaranteed</h4>
                    <p className="text-[12px]">30 days warranty for each product from our store</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
