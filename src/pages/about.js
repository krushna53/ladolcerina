import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"

const About = ({ data }) => {
  return (
    <Layout>
      <AboutWrapper>
        <SEO title="About" />
        <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
          <HeaderLogo />
        </Section>
        <Img fluid={data.Img1.childImageSharp.fluid} />
        <Section style={{ width: "80vw", margin: "4rem auto" }}>
          <p>
            10 years ago, I was just a food-obsessed, cookbook-hoarder working
            in corporate sales and living the Army wife dream...following my
            physician husband to the ends of the earth and beyond. In the midst
            of yet another move, I was presented with an amazing opportunity to
            fulfill one of my life’s dreams - to go to culinary school. I found
            myself in one of the most exciting places to eat in America
            practically overnight.
          </p>
          <p>
            In San Francisco, I learned the fundamentals of French cooking and
            ate my way through the local food scene. Classic mother sauces and
            soufflés by day, San Francisco foodie hotspots by night. I was in
            heaven!
          </p>
          <p>
            Just a few months after graduation, my husband and I moved to
            Germany, and for the next 3 ½ years, we ate our way through almost
            every country in Europe. I met chefs, winemakers, cheesemakers, and
            all sorts of farmers, and it was at the Le Cordon Bleu in Paris that
            I fell in love with fresh, local, seasonal, market cuisine. Through
            these experiences, I was inspired to write my first cookbook.
          </p>
          <p>
            I have taken cooking classes all over the world including Italy,
            Spain, South Korea, Japan, Thailand, and Vietnam. While once a
            private chef, I’m most passionate about teaching people how to
            transform fresh, quality ingredients into simple, healthy, delicious
            food.
          </p>
          <p>
            I created this platform with a goal to share delicious recipes
            inspired by my Italian roots and life abroad. I’ve had a pretty
            sweet life and I’m excited to share what I’ve learned with all of
            you.
          </p>
          <p>Welcome and enjoy!</p>
          <p>xo,</p>
          <p>Rina</p>
          <p>
            PS. I live in Honolulu, Hawaii with my husband Dave and my two
            little girls, Sophia and Elena. I love to eat, but not nearly as
            much as I love them.
          </p>
        </Section>
      </AboutWrapper>
      <Gallery />
    </Layout>
  )
}

const AboutWrapper = styled.div`
  p {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export default About

export const query = graphql`
  query {
    Img1: file(relativePath: { eq: "La-Dolce-Rina-About.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
