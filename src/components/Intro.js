import React from "react"
import styled from "styled-components"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"

const Intro = () => {
  return (
    <IntroWrapper>
      <Section style={{ alignItems: "center" }}>
        <div className="introBox">
          <ul>
            <li>LA</li>
            <li>DOLCE</li>
            <li>RINA</li>
          </ul>
          <p className="about-info">
            <strong>Hi! I’m Rina.</strong> I’m a wife, mom, cookbook author, and
            chef. Join me as I explore my Italian roots and relive my most
            treasured experiences through the dishes I create.
          </p>
        </div>
        <div className="contactBox">
          <ContactForm />
        </div>
      </Section>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  margin: 2rem auto;
  justify-content: space-between;
  .introBox,
  .contactBox {
    flex-basis: 40%;
  }
  .contactBox {
    #message {
      height: 100px;
    }
  }
  .introBox {
    ul {
      list-style-type: none;
      margin: 0rem;
      font-size: 7.5rem;
      font-family: Poppins;
      font-weight: bold;
      color: var(--mainColor);
      line-height: 5rem;
    }
  }
  .about-info {
    width: 90%;
    padding-left: 0.4rem;
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    width: 100vw;
    .introBox,
    .contactBox {
      flex-basis: 100%;
      margin: 0 auto;
      ul {
        font-size: 4rem;
        line-height: 2.5rem;
      }
    }
  }
`

export default Intro
