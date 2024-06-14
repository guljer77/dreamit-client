import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Container from "../../../Components/Container";
import Img from "./../../../assets/home-16.jpg";

function Stories() {
  return (
    <div className="py-10">
      <Container>
        <h4 className="text-[36px] font-medium text-center pb-10">
          Success stories from our students!!!
        </h4>
        <div className="flex items-center justify-between">
          <div className="lg:block hidden">
            <div className="flex items-center space-x-5">
              <div className="button-prev-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                <FaArrowLeftLong />
              </div>
              <div className="button-next-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 rounded shadow-md p-5">
                <p className="text-[15px] font-light pb-2">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </p>
                <div className="flex items-start gap-2">
                  <img src={Img} alt="" />
                  <div>
                    <h4 className="text-[16px] font-medium">Client Name</h4>
                    <p className="text-[14px] font-light">Profession</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Stories;
