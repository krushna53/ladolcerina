import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import styled from "styled-components"
import Banner from "../components/globals/header/Banner"
import DessertSignUpForm from "../components/DessertSignUpForm"
import BackgroundImage from "gatsby-background-image"
import DessertGallery from "../components/dessertGallery"

const Promos = ({ data }) => {
  const { title, content, offer, details, src, testimonial } = data.promoItem

  return (
    <Layout>
      <Wrapper>
        <Section
          style={{
            width: "100vw",
            margin: "2rem auto",
            alignItems: "center",
          }}
        >
          <BackgroundImage
            className="hero"
            Tag="section"
            fluid={src.childImageSharp.fluid}
          >
            <Banner title={title}>
              <ul className="details">
                {details.map((value, id) => {
                  return <li key={id}>{value}</li>
                })}
              </ul>
            </Banner>
          </BackgroundImage>
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto 1rem auto" }}>
          <div className="box form-container">
            <div className="summary-container">
              <Img fluid={data.rina.childImageSharp.fluid} />
              <ul className="contentList">
                {content.map((value, id) => {
                  return <li key={id}>{value}</li>
                })}
              </ul>
            </div>
            <div className="summary-container">
              <div className="form ">
                <DessertSignUpForm />
              </div>
            </div>
          </div>
          <div className="box">
            <ul className="contentList">
              {offer.map((value, id) => {
                return <li key={id}>{value}</li>
              })}
            </ul>
          </div>
        </Section>
        <DessertGallery />
        <Section style={{ width: "80vw", margin: "4rem auto 2rem auto" }}>
          <div className="testimonial">
            <div className="testimonial-copy">
              <h4>Testimonial:</h4>
              <ul className="contentList">
                {testimonial.map((value, id) => {
                  return <li key={id}>{value}</li>
                })}
              </ul>
            </div>
          </div>
        </Section>
        <Section style={{ margin: "0rem auto 4rem auto" }}>
          <div className="form ">
            <DessertSignUpForm />
          </div>
        </Section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    promoItem: promosJson(slug: { eq: $slug }) {
      id
      title
      slug
      content
      offer
      details
      src {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      testimonial
    }
    rina: file(relativePath: { eq: "rina-cookbook-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    matt: file(relativePath: { eq: "matt.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.div`
  color: var(--darkGray);
  .form-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .summary-container {
      flex-basis: 45%;
    }
  }
  .box {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }
  .hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .details {
    background: var(--mainColor);
    width: 60%;
    margin: 0rem auto;
    padding: 0.3rem 0.5rem 0.5rem 0.5rem;
    border-radius: 2px;
    li {
      margin: 0.5rem;
      display: inline;
    }
  }
  ul > li:nth-child(1) {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .cta {
    font-style: italic;
    font-weight: bold;
    color: var(--mainColor);
    margin-top: 0.5rem;
  }
  .contentList {
    margin-top: 1rem;
    font-family: "Open Sans";
    li {
      list-style-type: none;
    }
  }
  .form {
    background: #f1f1f1;
    border-radius: 5px;
    flex-basis: 45%;
    padding: 1rem;
  }
  .offers {
    flex-basis: 45%;
    .offersList {
      width: 100%;
      margin: 0rem auto;
      li {
        list-style-type: none;
      }
    }
  }

  @media (max-width: 768px) {
    .details {
      width: 90%;
      margin: 0rem auto;
    }
    .offers {
      flex-basis: 100%;
    }
    .list {
      margin: 2rem 0rem;
    }
    .box {
      flex-basis: 100%;
    }
    .form {
      margin: 2rem 0rem;
      flex-basis: 100%;
      padding: 1rem;
    }
    .form-container {
      .summary-container {
        flex-basis: 100%;
      }
    }
  }
`

export default Promos
