import styled from "styled-components";
import hamburger from "../images/icon-hamburger.svg";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import data from "../data";
import { useState } from "react";
import arrow from "../images/icon-arrow.svg";
import Sidebar from "./Sidebar";

const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const { title, text, mobileImg } = data[index];

  const prevSlide = () => {
    setIndex((currentItem) => {
      const result = (currentItem - 1 + data.length) % data.length;
      return result;
    });
  };
  const nextSlide = () => {
    setIndex((currentItem) => {
      const result = (currentItem + 1) % data.length;
      return result;
    });
  };
  return (
    <Wrapper className="ff-spartan fw-400 fs-120">
      <div className="header">
        <header>
          <img
            src={hamburger}
            alt="hamburger"
            className="hamburger"
            onClick={() => setSidebar(!sidebar)}
          />
          <h2 className="text-white fw-500">room</h2>
        </header>
        {sidebar && <Sidebar setSidebar={setSidebar} sidebar={sidebar} />}
        <img src={mobileImg} alt="mobile-img" className="mobile-img" />
        <div className="btn-container">
          <button type="button" className="prev-btn btn" onClick={prevSlide}>
            <img src={angleLeft} alt="angle" className="angle" />
          </button>
          <button type="button" className="next-btn btn" onClick={nextSlide}>
            <img src={angleRight} alt="angle" className="angle" />
          </button>
        </div>
      </div>
      <div className="room-info">
        <h1 className="room-title text-black fw-700">{title}</h1>
        <p className="text-gray">{text}</p>
        <a href="#" className="shop-link text-black uppercase">
          shop now <img src={arrow} alt="arrow" className="arrow" />
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .header {
    position: relative;
  }
  .mobile-img {
    position: relative;
  }
  .hamburger {
    cursor: pointer;
  }
  header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 2;
    width: 375px;
    padding: 1.5rem 2rem;
    gap: 7rem;
  }
  .btn-container {
    position: absolute;
    z-index: 2;
    margin-top: -3.1rem;
    text-align: right;
    width: 375px;
  }
  .room-info {
    padding: 2rem 1rem;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  p {
    line-height: 1.3;
    font-size: 14px;
    word-spacing: 3px;
    margin-bottom: 1rem;
  }
`;

export default ImgSlider;
