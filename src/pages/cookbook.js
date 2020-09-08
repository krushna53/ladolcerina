import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import Intro from "../components/Intro"

const Cookbook = () => {
  const data = useStaticQuery(graphql`
    query {
      getImages: allFile(filter: { relativeDirectory: { eq: "bio" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.getImages.edges
  return (
    <Layout>
      <StyledCookbook>
        <SEO title="Cookbook" />
        <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
          <HeaderLogo />
        </Section>
        <Section style={{ width: "100vw", flexDirection: "column" }}>
          <div className="box box-title">
            <h1>Bushels and Feasts</h1>
            <h3>
              More than 150 Farm-to-Table Recipes for a Gluten and Grain-Free
              Lifestyle
            </h3>
            <p>By Rina Thoma and Sarah Fragoso</p>
            <p>
              BUSHELS AND FEASTS is a collaboration between Le Cordon Bleu
              trained chef Rina Thoma and international bestselling cookbook
              author Sarah Fragoso. The result is a celebration of real food;
              beautiful, delicious, market-fresh, family meals free from gluten
              and grains and filled with healthy fats and decadent desserts.{" "}
            </p>
          </div>
          <div className=" bio-gallery">
            {images.map(({ node }, index) => {
              return (
                <div key={index} className={`bio-item`}>
                  <Img fluid={node.childImageSharp.fluid} />
                </div>
              )
            })}
          </div>
          <div className="box">
            <p>
              <strong>
                <FaQuoteLeft />{" "}
                <em>
                  Rina and Sarah will inspire their readers to ditch the gluten
                  and grains and focus on transforming fresh, quality, local,
                  and seasonal ingredients into healthy delicious food. The
                  pages of this book are filled with wit, fun, and humor, but
                  also exquisitely beautiful, warm, enchanting, and bursting at
                  the seams with elegant food photography and sweeping Northern
                  California landscapes.
                </em>
              </strong>
            </p>
            <p>
              <strong>
                <em>
                  BUSHELS AND FEASTS will inspire, delight, and empower readers
                  to entertain in style, as all of their recipes serve 6,
                  creating special meals and memories for family and friends.
                  The recipes in this book will leave readers feeling satisfied,
                  accomplished, and exhilarated with a nourished mind, body and
                  soul.
                </em>{" "}
                <FaQuoteRight />
                <p style={{ marginTop: "1rem" }}>- Chef Matt Raso</p>
              </strong>
            </p>
            <p>
              Mat Raso is the executive chef at Canoe House at Mauna Lani,
              Auberge Resorts Collection, on the Big Island of Hawaii, and
              former executive chef at famed Nobu restaurant locations including
              Dallas, Waikiki, Honolulu, and Miami. Matt is passionate about
              cuisine that celebrates the bounty of local ingredients and those
              who so beautifully craft that food.
            </p>
            <p>
              At this time, Bushels and Feasts is only available in eBook form.
              An eBook is a cookbook in an electronic format. Rather than having
              to go to the store to purchase a cookbook, you can download it to
              your computer, smartphone, or tablet for easy access whenever you
              are ready to cook!
            </p>
            <p>
              After you purchase your eCookbook, you will receive an email with
              a pdf file that you can download to your devices and save for
              future use.
            </p>
            <p>Buy eCookbook now!</p>
          </div>
          <div className="box">
            <Intro />
          </div>
        </Section>
      </StyledCookbook>
    </Layout>
  )
}

const StyledCookbook = styled.div`
  .box {
    width: 80vw;
    margin: 2rem auto;
    p {
      margin-bottom: 1rem;
    }
  }
  .bio-gallery {
    width: 100vw;
    margin: 0rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  .bio-item {
    flex-basis: 25%;
  }
  .box-title {
    color: var(--mainColor);
  }
  .food-gallery {
    width: 100vw;
    margin: 0rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    flex-basis: 20%;
  }
  svg {
    color: var(--mainColor);
  }
  @media (max-width: 768px) {
    .bio-item {
      flex-basis: 50%;
    }
    .item {
      flex-basis: 50%;
    }
    h1 {
      line-height: 2rem;
    }
    h3 {
      line-height: 1.2rem;
      margin: 1rem 0rem;
    }
  }
`

export default Cookbook
