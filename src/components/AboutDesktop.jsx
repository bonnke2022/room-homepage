import styled from "styled-components";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";

const AboutDesktop = () => {
  return (
    <Wrapper className="ff-spartan">
      <img src={aboutDark} alt="about-dark" className="about-dark about-img" />
      <div className="about-info">
        <h2 className="text-dark uppercase fw-700">about our furniture</h2>
        <p className="text-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each each room unique or pick a cohesive theme
          that best express your interests and what inspires you. Find the
          furniture pieces you need from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </div>
      <img
        src={aboutLight}
        alt="about-light"
        className="about-light about-img"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
  .about-img {
    width: 35vw;
    height: 30vh;
  }
  .about-info {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  p {
    word-spacing: 1.5px;
    line-height: 1.5;
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default AboutDesktop;
