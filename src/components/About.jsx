import styled from "styled-components";
import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";

const About = () => {
  return (
    <Wrapper>
      <img src={aboutDark} alt="about-image" className="about-img about-dark" />
      <div className="about-info">
        <h3 className="text-black fw-700 uppercase">about our furniture</h3>
        <p className="text-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need from traditional to contemporary styles or anything in
          between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        src={aboutLight}
        alt="about image"
        className="about-img about-light"
      />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  .about-info {
    padding: 2rem 1rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.3;
    font-size: 14px;
    word-spacing: 3px;
    margin-bottom: 1rem;
  }
`;

export default About;
