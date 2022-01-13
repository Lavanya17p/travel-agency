import React from "react";
import styled from "styled-components";
import avatar from "../images/avatar.png";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aliquid totam explicabo, cum dignissimos commodi!
          </p>
          <div className="info">
            <img src={avatar} alt="" />
            <div className="details">
              <h4>Lavanya</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aliquid totam explicabo, cum dignissimos commodi!
          </p>
          <div className="info">
            <img src={avatar} alt="" />
            <div className="details">
              <h4>Lavanya</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            aliquid totam explicabo, cum dignissimos commodi!
          </p>
          <div className="info">
            <img src={avatar} alt="" />
            <div className="details">
              <h4>Lavanya</h4>
              <span>Web Developer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.2rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        img {
          height: 3rem;
          border-radius: 5rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
      }
    }
  }
`;
