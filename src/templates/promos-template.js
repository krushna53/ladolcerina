import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import styled from "styled-components"
import Banner from "../components/globals/header/Banner"
import SignupForm from "../components/SignupForm"
import BackgroundImage from "gatsby-background-image"
import Gallery from "../components/gallery"

const Promos = ({ data }) => {
  const { title, content, offer, details, src } = data.promoItem

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
                  return <li key={id}>• {value}</li>
                })}
              </ul>
            </Banner>
          </BackgroundImage>
        </Section>
        <Section style={{ width: "80vw" }}>
          <div className="box">
            <ul className="contentList">
              <h4>Summary:</h4>
              {content.map((value, id) => {
                return <li key={id}>{value}</li>
              })}
            </ul>
          </div>
        </Section>
        <Section
          style={{
            width: "80vw",
            margin: "1rem auto 4rem auto",
            alignItems: "center",
          }}
        >
          <div className="offers">
            <ul className="offersList">
              <h4>Details:</h4>
              {offer.map((value, id) => {
                return <li key={id}>• {value}</li>
              })}
            </ul>
          </div>
          <div className="form">
            <SignupForm />
          </div>
        </Section>
      </Wrapper>
      <Gallery />
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
    }
  }
`

const Wrapper = styled.div`
  .box {
    flex-basis: 100%;
  }
  .hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .details {
    background: var(--darkGray);
    width: 60%;
    margin: 0rem auto;
    padding: 0.3rem 0.5rem 0.5rem 0.5rem;
    border-radius: 2px;
    li {
      margin: 0.5rem;
      display: inline;
      font-size: 0.8rem;
    }
  }
  h4 {
    color: var(--darkGray);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .contentList {
    margin-top: 1rem;
    font-family: "Open Sans";
    color: var(--darkGray);
    font-size: 0.8rem;
    line-height: 1.5rem;
    li {
      list-style-type: none;
      margin-bottom: 1rem;
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
        font-size: 0.8rem;
        list-style-type: none;
        line-height: 1.5rem;
        color: var(--darkGray);
      }
    }
  }
  @media (max-width: 768px) {
    .details {
      width: 100%;
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
  }
`

export default Promos
