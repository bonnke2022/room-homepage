import styled from "styled-components";
import iconClose from "../images/icon-close.svg";

const Sidebar = ({ setSidebar, sidebar }) => {
  return (
    <Wrapper>
      <header>
        <img
          src={iconClose}
          alt="icon-close"
          className="icon-close"
          onClick={() => setSidebar(!sidebar)}
        />
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
      </header>
      <div className="overlay"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 375px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--White);
    z-index: 3;
    display: flex;
    width: 375px;
    padding: 4rem 0 3rem 0;
    margin-top: -2rem;
    margin-left: 0rem;
  }
  .overlay {
    position: absolute;
    width: 375px;
    height: 137vh;
    background: var(--Black);
    opacity: 0.7;
    z-index: 10;
    top: 10%;
    margin-top: 7.5rem;
    overflow: hidden;
  }
  .icon-close {
    cursor: pointer;
    scale: 1.5;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
  li > a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: var(--Black);
  }
`;

export default Sidebar;
