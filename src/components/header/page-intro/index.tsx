import { Swiper, SwiperSlide } from "swiper/react";
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
        <SwiperSlide className="w-64 flex-shrink-0 p-4">
          <div
            className="bg-cover bg-center bg-no-repeat h-[80vh] items-center flex "
            style={{ backgroundImage: "url('images/slide-1.jpg')" }}
          >
            <div className="relative ">
              <div className="relative justify-center mt-auto mb-50 ml-10">
                <h2 className="text-white text-5xl align-bottom justify-center pl-3">
                  Summer Sales
                </h2>
              </div>
            </div>
          </div> <div className="absolute z-50 bg-white bottom-0  left-0 rounded-tr-[80px] p-10">
        <div>
            <ul className="flex z-50 gap-10 text-[#333333]">
                <li className="z-50 flex">
                    <i>
                        <img src="images/icon-1.png" alt="icon" />
                    </i>
                    <div>
                        <h4 className="text-[14px]">Free Shipping</h4>
                        <p>On purchase over $199</p>
                    </div>
                </li>
                <li className="flex">
                    <i>
                        <img src="images/icon-1.png" alt="icon" />
                    </i>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>On purchase over $199</p>
                    </div>
                </li>
                <li className="flex">
                    <i>
                        <img src="images/icon-1.png" alt="icon" />
                    </i>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>On purchase over $199</p>
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
