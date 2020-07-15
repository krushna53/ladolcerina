import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
// import BackgroundImage from "gatsby-background-image"

const Intro = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     img1: file(relativePath: { eq: "lines-bg.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyImageSharpFluid_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <IntroWrapper>
      <Section
        style={{
          width: "90vw",
          margin: "2rem auto",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="introBox">
          <ul>
            <li>LA</li>
            <li>DOLCE</li>
            <li>RINA</li>
          </ul>
        </div>
        <div className="contactBox">
          <ContactForm />
        </div>
      </Section>
    </IntroWrapper>
  )
}

const IntroWrapper = styled.div`
  .introBox,
  .contactBox {
    flex-basis: 50%;
    font-family: "Poppins";
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
  @media (max-width: 768px) {
    .introBox,
    .contactBox {
      flex-basis: 90%;
    }
  }
`

export default Intro
