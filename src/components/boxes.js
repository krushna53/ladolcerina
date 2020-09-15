import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import styled from "styled-components"

const Boxes = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "home/la-dolce-rina-bg-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(relativePath: { eq: "home/la-dolce-rina-bg-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img3: file(relativePath: { eq: "home/la-dolce-rina-bg-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img4: file(relativePath: { eq: "home/la-dolce-rina-bg-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <div className="item item-1">
        <Img fluid={data.img1.childImageSharp.fluid} />
        <AniLink fade to="/about">
          <p className="info">about</p>
        </AniLink>
      </div>
      <div className="item item-2">
        <Img fluid={data.img2.childImageSharp.fluid} />
        <AniLink fade to="/recipes">
          <p className="info">recipes</p>
        </AniLink>
      </div>
      <div className="item item-4">
        <Img fluid={data.img4.childImageSharp.fluid} />
        <AniLink fade to="/cookbook">
          <p className="info">cookbook</p>
        </AniLink>
      </div>
      <div className="item item-3">
        <Img fluid={data.img3.childImageSharp.fluid} />
        <AniLink fade to="/promos/dessert-recipes">
          <p className="info">dessert ebook</p>
        </AniLink>
      </div>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0rem auto;
  .item {
    position: relative;
    width: 45%;
    margin: 0.5rem;
    .info {
      text-transform: uppercase;
      font-family: "Poppins";
      font-weight: bold;
      font-size: 4rem;
      line-height: 3.5rem;
      position: absolute;
      text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);
      letter-spacing: 2px;
      top: 50%;
      padding: 0.5rem 1.5rem;
      color: var(--white);
      transition: 200ms ease-in;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 768px) {
    .item {
      width: 100%;
      .info {
      }
    }
  }
`

export default Boxes
