import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import { FaTwitter } from "react-icons/fa";
import * as S from "./styles";

const teams = [
  {
    image: "/assets/nfts/4.png",
    role: "Founder",
    name: "aGod",
    twitter: "https://x.com/agod_sol?s=21&t=-jIPDHhcIg88v4SKygTZbg",
  },
  {
    image: "/assets/nfts/5.png",
    role: "Co-Founder & Consulting",
    name: "Sol.idified",
    twitter: "https://x.com/sol_idified?s=21&t=gF5STtmCENVUEaIjjr5Vng",
  },
  {
    image: "/assets/nfts/3.png",
    role: "Community Bunny",
    name: "Ethan",
    twitter: "https://x.com/crypt_ethan",
  },
  {
    image: "/assets/nfts/8.png",
    role: "Collaboration Manager",
    name: "TheRealEmko",
    twitter: "https://x.com/therealemko_",
  },
  {
    image: "/assets/nfts/9.png",
    role: "Moderator Bunny",
    name: "Dutyvata",
    twitter: "https://x.com/goldtymes?s=21",
  },
  {
    image: "/assets/nfts/1.png",
    role: "Artist",
    name: "Medios De Diseno",
    twitter: "https://x.com/mediosdiseno?s=21&t=d11XZncuW4V3o5v8uUnIwQ",
  },
  {
    image: "/assets/nfts/2.png",
    role: "Web Developer",
    name: "Kenzo Suzuki",
    twitter: "https://x.com/hashi_7412",
  },
];

export const TeamSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <S.TeamsWrapper>
      <S.TeamsContent>
        <h1 className="font-title" data-aos="fade-up">
          Meet the team
        </h1>
        <p className="font-content" data-aos="fade-up">
          Our core team is below. Come say hi in our Discord or Telegram!
        </p>
        <S.TeamsSlider data-aos="fade-up">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            centeredSlides={true}
            loop={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {teams.map((item, key) => (
              <SwiperSlide key={key}>
                <S.TeamsItemWrapper>
                  <div className="img-wrapper">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="font-content">{item.role}</p>
                  <h2 className="font-content">{item.name}</h2>
                  <a href={item.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter color="#1DA1F2" size={22} />
                  </a>
                </S.TeamsItemWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.TeamsSlider>
      </S.TeamsContent>
    </S.TeamsWrapper>
  );
};
