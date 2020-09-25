import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const DessertGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "dessert/dessert-image-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "dessert/dessert-image-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "dessert/dessert-image-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "dessert/dessert-image-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img5: file(relativePath: { eq: "dessert/dessert-image-05.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img6: file(relativePath: { eq: "dessert/dessert-image-06.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img7: file(relativePath: { eq: "dessert/dessert-image-07.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img8: file(relativePath: { eq: "dessert/dessert-image-08.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img9: file(relativePath: { eq: "dessert/dessert-image-09.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10: file(relativePath: { eq: "dessert/dessert-image-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <GalleryWrapper>
      <div className="item item-1">
        <Img fluid={data.img1.childImageSharp.fluid} />
        <p className="info">Summer Fruit Papillotes</p>
      </div>
      <div className="item item-2">
        <Img fluid={data.img2.childImageSharp.fluid} />
        <p className="info">Salted Caramel Dark Chocolate Mousse</p>
      </div>
      <div className="item item-3">
        <Img fluid={data.img3.childImageSharp.fluid} />
        <p className="info">Pears Poached in Port Wine and Vanilla</p>
      </div>
      <div className="item item-4">
        <Img fluid={data.img4.childImageSharp.fluid} />
        <p className="info">
          Grilled Honey-Butter Nectarines with Cinnamon Ice Cream
        </p>
      </div>
      <div className="item item-5">
        <Img fluid={data.img5.childImageSharp.fluid} />
        <p className="info">Dark Chocolate Ganache with Fresh Seasonal Fruit</p>
      </div>
      <div className="item item-6">
        <Img fluid={data.img6.childImageSharp.fluid} />
        <p className="info">Cherry Clafouti with Maple Whipped Cream</p>
      </div>
      <div className="item item-7">
        <Img fluid={data.img7.childImageSharp.fluid} />
        <p className="info">
          Chocolate-Coconut Pots de Creme with Passion Fruit Caramel
        </p>
      </div>
      <div className="item item-8">
        <Img fluid={data.img8.childImageSharp.fluid} />
        <p className="info">Cardamom Scented Dark Chocolate Truffles</p>
      </div>
      <div className="item item-9">
        <Img fluid={data.img9.childImageSharp.fluid} />
        <p className="info">Brown Butter Pistachio and Lemon Financiers</p>
      </div>
      <div className="item item-10">
        <Img fluid={data.img10.childImageSharp.fluid} />
        <p className="info">
          Baked Apples with Goat Cheese, Bacon, and Walnuts
        </p>
      </div>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0rem auto;
  .item {
    position: relative;
    width: 60%;
    margin: 1rem auto;
  }
  .info {
    text-transform: uppercase;
    line-height: 2.5rem;
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    color: var(--white);
    font-weight: bold;
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    .item {
      width: 90%;
    }
  }
`

export default DessertGallery
