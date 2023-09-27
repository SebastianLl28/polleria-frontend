/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Slider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Sliders
      {...settings}
      css={css`
        overflow: hidden;
        padding: 0;
        margin: 0;
      `}
    >
      <div>
        <Image src="/home/slide1.jpg" alt="" />
      </div>
      <div>
        <Image src="/home/slide2.png" alt="" />
      </div>
      <div>
        <Image src="/home/slide3.jpg" alt="" />
      </div>
    </Sliders>
  );
};

export default Slider;

const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  background-size: cover;
  min-height: 12rem;
`;
