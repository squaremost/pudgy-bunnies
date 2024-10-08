import React, { useEffect } from "react";
import AOS from "aos";
import {
  FaDiscord,
  FaTelegram,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import * as S from "./styles";

export const LandingSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <S.LandingWrapper>
      <S.LandingContent data-aos="fade-up">
        <h1 className="font-title">Pudgy Bunnies</h1>
        <p className="font-content">
        6,000 Pudgy Bunnies coming soon to the Solana Blockchain
        </p>
        <button className="font-content">Coming soon</button>
        <div className="socials">
          <a
            href="https://discord.com/invite/pudgybunnies"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://t.me/+dulrwLwhjVMzZTQx"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://x.com/pudgybunnies_"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/pudgybunnies"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </S.LandingContent>
    </S.LandingWrapper>
  );
};
