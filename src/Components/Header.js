import React from "react";
import styled from "styled-components";
import homeImage from "../images/hero.png";

function Header() {
  return (
    <Section id="home">
      <div className="background">
        <img src={homeImage} alt="home" />
      </div>
      <div className="content">
        <div className="title">
          <h1>Travel to explore</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            possimus maiores distinctio quia molestias nihil.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search for your location..." />
          </div>
          <div className="container">
            <label htmlFor="">Check In</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check Out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    .title {
      color: #fff;
      h1 {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-size: 3rem;
      }
      p {
        padding: 0 30vw;
        text-align: center;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffca;
      border-radius: 0.5rem;
      padding: 1rem;
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1.2rem;
        label {
          font-size: 1.1rem;
          color: #03054e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 0 1.5rem;
        font-size: 1.1rem;
        border-radius: 0.3rem;
        cursor: pointer;
        border: none;
        background-color: #4361ee;
        color: white;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 30rem;
    .background {
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 1rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Header;
