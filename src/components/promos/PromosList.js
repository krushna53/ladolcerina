import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Promo = () => {
  const data = useStaticQuery(graphql`
    query {
      promos: allPromosJson {
        edges {
          node {
            id
            slug
            title
            content
            src {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const promos = data.promos.edges
  return (
    <PromoWrapper>
      {promos.map(({ node }, index) => {
        return (
          <div className="promo" key={index}>
            <div className="internal">
              <AniLink className="link" fade to={`/promos/${node.slug}`}>
                <Img className="Img" fluid={node.src.childImageSharp.fluid} />
              </AniLink>
            </div>
            <div className="internal">
              <AniLink fade to={`/promos/${node.slug}`}>
                <h4>{node.title}</h4>
              </AniLink>
              <p className="content">{node.content[0].slice(0, 70)}...</p>
            </div>
          </div>
        )
      })}
    </PromoWrapper>
  )
}

const PromoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .promo {
    flex-basis: 30%;
    margin: 0.5rem;
  }
  .internal {
    p {
      color: var(--darkGray);
      line-height: 1.2rem;
      margin: 0.1rem 0rem 0.5rem 0rem;
    }
  }
  h4 {
    font-family: "Poppins";
    color: var(--darkGray);
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
    letter-spacing: 0rem;
  }
  .Img {
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    .promo {
      flex-basis: 100%;
    }
  }
`

export default Promo
