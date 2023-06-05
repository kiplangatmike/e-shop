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
    <section>
      <Swiper
        className="w-full overflow-x-auto relative"
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide className="w-64 flex-shrink-0 p-4">
          <div
            className="bg-cover bg-center bg-no-repeat h-[80vh] items-center flex "
            style={{ backgroundImage: "url('images/slide-1.jpg')" }}
          >
            <div className="relative ">
              <div className="relative justify-center mt-auto mb-40">
                <h2 className="text-white text-5xl align-bottom justify-center pl-3">
                  Summer Sales
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="w-64 flex-shrink-0 p-4">
          <div
            className="bg-cover bg-center bg-no-repeat h-[80vh] items-center flex"
            style={{ backgroundImage: "url('images/slide-1.jpg')" }}
          >
            <div className="justify-center">
              <h2 className="text-white text-5xl align-bottom justify-center pl-3">
                Summer Sale
              </h2>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="absolute z-50 bg-white -mt-[170px] ml-4 rounded-tr-[80px] p-10 border border-2 border-black">
        <div>
            <ul className="flex z-50">
                <li className="z-50">
                    <i>
                        <img src="images/icon-1.png" alt="icon" />
                    </i>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>On purchase over $199</p>
                    </div>
                </li>
                <li>
                    <i>
                        <img src="images/icon-1.png" alt="icon" />
                    </i>
                    <div>
                        <h4>Free Shipping</h4>
                        <p>On purchase over $199</p>
                    </div>
                </li>
                <li>
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
    </section>
  );
}
