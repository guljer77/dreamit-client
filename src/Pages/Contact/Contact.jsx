import React from "react";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import Container from "../../Components/Container";

function Contact() {
  return (
    <>
      <CommonBanner heading={"Contact Us"} />
      <Container>
        <div className="pt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            <div className="flex items-center justify-center gap-3 lg:mb-0 mb-5 bg-primary/10 py-7 rounded-sm">
              <span className="flex items-center justify-center w-[35px] h-[35px] bg-white border rounded-sm text-primary">
                <FaLocationDot />
              </span>
              <span>123 Street, New York, USA</span>
            </div>
            <div className="flex items-center justify-center gap-3 lg:mb-0 mb-5 bg-primary/10 py-7 rounded-sm">
              <span className="flex items-center justify-center w-[35px] h-[35px] bg-white border rounded-sm text-primary">
                <FaEnvelopeOpen />
              </span>
              <span>guljer.net@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 lg:mb-0 mb-5 bg-primary/10 py-7 rounded-sm">
              <span className="flex items-center justify-center w-[35px] h-[35px] bg-white border rounded-sm text-primary">
                <FaPhoneAlt />
              </span>
              <span>+880 1792790977</span>
            </div>
          </div>
          <div className="py-10 lg:flex items-start justify-start gap-5">
            <div className="lg:mb-0 mb-5 lg:w-1/2 w-full">
              <iframe
                className="w-[100%] block h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.446562445908!2d90.40391913013804!3d23.796839941763643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7ba38543b%3A0x91d5f14ad296d72e!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1717225585720!5m2!1sen!2sbd"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lg:w-1/2 w-full">
              <form>
                <div className="lg:flex items-center justify-between gap-5 w-full lg:mb-5 mb-0">
                  <div className="lg:w-1/2 w-full lg:mb-0 mb-5">
                    <input
                      type="text"
                      placeholder="Enter Your Name."
                      className=" outline-0 border w-full border-primary px-3 py-2 block rounded-sm"
                    />
                  </div>
                  <div className="lg:w-1/2 w-full lg:mb-0 mb-5">
                    <input
                      type="email"
                      placeholder="Enter Your Email."
                      className=" outline-0 border w-full border-primary px-3 py-2 block rounded-sm"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Enter Subject."
                    className=" outline-0 border w-full border-primary px-3 py-2 block rounded-sm"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    name=""
                    id=""
                    className="w-full outline-0 border h-[200px] border-primary px-3 py-2 block rounded-sm"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value={"Message"}
                    className="px-5 py-2 bg-primary text-white rounded-sm text-[16px] font-light cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;
