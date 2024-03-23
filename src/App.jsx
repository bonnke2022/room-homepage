import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { About, AboutDesktop, Hero, ImgSlider } from "./components/index";

const App = () => {
  return (
    <Wrapper>
      <div className="container ff-spartan fw-400 fs-120">
        <ImgSlider />
        <About />
      </div>
      <Hero />
      <AboutDesktop />
      <ToastContainer position="top-center" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
