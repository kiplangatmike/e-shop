import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
export default function PageIntro() {
    return (
        <section>
            <Swiper>
                <SwiperSlide>
                    <div className="bg-cover bg-center bg-no-repeat h-[80vh]" style={{backgroundImage: "url('images/slide-1.jpg')"}}></div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}