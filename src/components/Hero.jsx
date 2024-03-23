import styled from "styled-components";
import data from "../data";
import angleLeft from "../images/icon-angle-left.svg";
import angleRight from "../images/icon-angle-right.svg";
import arrow from "../images/icon-arrow.svg";
import { useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const { title, text, desktopImg } = data[index];

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
    <Wrapper className="ff-spartan">
      <div className="hero-section">
        <nav>
          <h2 className="text-white fw-700">room</h2>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>
        <img src={desktopImg} alt="desktop-img" className="desktop-img" />
      </div>
      <div className="room-info">
        <h1 className="room-title text-black fw-700">{title}</h1>
        <p className="text-gray">{text}</p>
        <a href="#" className="shop-link text-black uppercase">
          shop now <img src={arrow} alt="arrow" className="arrow" />
        </a>
        <div className="btn-container">
          <button type="button" className="prev-btn btn" onClick={prevSlide}>
            <img src={angleLeft} alt="angle" className="angle" />
          </button>
          <button type="button" className="next-btn btn" onClick={nextSlide}>
            <img src={angleRight} alt="angle" className="angle" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  .hero-section {
    position: relative;
  }
  .desktop-img {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 55vw;
    height: 70vh;
  }
  nav {
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 3rem;
    gap: 2.5rem;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
  }
  li > a {
    text-decoration: none;
    color: var(--White);
    cursor: pointer;
    padding: 1.5rem 0;
  }
  li > a:hover {
    border-bottom: 3px solid var(--White);
  }
  .room-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    text-align: left;
    margin-left: clamp(-1.5rem, 5vw, -7rem);
    margin-right: clamp(1.5rem, 5vw, 20rem);
    position: relative;
  }
  h1 {
    font-size: clamp(1.5rem, 5vw, 3.71rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 1.7rem;
  }
  p {
    line-height: 1.3;
    font-size: 14px;
    word-spacing: 3px;
    margin-bottom: 1.5rem;
  }
  .btn-container {
    position: absolute;
    bottom: 0;
    left: clamp(-35.6%, 5vw, -35.6%);
  }
  .angle {
    scale: 1.3;
  }
  .btn {
    padding: 1.5rem;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default Hero;
