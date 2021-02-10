import React from "react"
import styled from "styled-components"
import Section from "../globals/section/Section"
import Banner from "../globals/header/Banner"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaPrint } from "react-icons/fa"

const Valentine = ({ style }) => {
  const data = useStaticQuery(graphql`
      query {
        valentines: allValentinesJson(filter: { free: { eq: "yes" } }) {
          edges {
            node {
              id
              free
              slug
              title
              summary
              ingredients1
              ingredientsList1
              directions
              src {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `)

  const valentines = data.valentines.edges
  console.log(valentines);
  return (
    <ValentinesWrapper>
      <section
        style={{
          width: "100vw",
          margin: "2rem auto",
          alignItems: "center",
        }}
      >
        <BackgroundImage
          className="hero no-print"
          Tag="section"
          fluid={valentines[0] && valentines[0].node.src.childImageSharp.fluid}
        >
          <Banner title={"VALENTINES DAY MENU"}></Banner>
        </BackgroundImage>
      </section>
        <Section style={{ width: "80vw" }}>
                <a href={`https://ekm383.github.io/LDRDownloads/ValentinesDayMenu.pdf`} >
                    <button style={{ fontSize: "1rem", padding: "0.5rem 1rem", background: "var(--mainColor)",
                        border: "none",
                        borderRadius: "5px",
                        color: "#ffffff"
                    }}>
                        Print <FaPrint />
                    </button>
                </a>



            <a href="https://www.bushelsandfeasts.com">
                <button style={{ fontSize: "1rem", padding: "0.5rem 1rem", background: "var(--mainColor)",
                    border: "none",
                    borderRadius: "5px",
                    color: "#ffffff"
                }} className="no-print">Buy Cookbook</button>
            </a>

        </Section>
          <p
            style={{
              fontSize: "28px",
              margin: "12px auto",
              color: "black",
              fontFamily: "Caveat",
              textAlign: "center",
              width: "100%",
            }}
          >
              French Onion Soup<br/><br/>
              Beef Tenderloin Filet with Red Wine Butter Sauce<br/><br/>
              or<br/><br/>
              Braised Beef Short Ribs with Port Wine and Chocolate<br/><br/>
              with<br/><br/>
              Celery Root Purée or Cauliflower Purée<br/><br/>
              Pears Poached in Port Wine and Vanilla<br/><br/>
              or<br/><br/>
              Salted Caramel Dark Chocolate Mousse<br/><br/>

          </p>

      {valentines.map(({ node }, index) => {
        const {
          title,
          summary,
          dish,
          text1,
          ingredients1,
          ingredientsList1,
          directions,
        } = node
        return (
          <Wrapper key={index}>
            <Section style={{ width: "80vw" }}>
              <div className="box">
                <ul className="contentList">
                  <h4>{title}</h4>
                  {summary.map((value, id) => {
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
              <div className="recipe-container">
                <div className="ingredients">
                  <h4>{dish}</h4>
                  <p>{text1}</p>
                </div>
                <div className="ingredients">
                  <h4>{ingredients1}</h4>
                  <ul className="ingredientsList">
                    {ingredientsList1.map((value, id) => {
                      return <li key={id}> {value}</li>
                    })}
                  </ul>
                </div>
                <div className="ingredients">
                  <h4>Instructions:</h4>
                  <ul className="directionsList">
                    {directions.map((value, id) => {
                      return <li key={id}> {value}</li>
                    })}
                  </ul>
                </div>
              </div>
            </Section>
          </Wrapper>
        )
      })}
    </ValentinesWrapper>
  )
}

const ValentinesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .recipe {
    flex-basis: 43%;
    margin: 0.5rem;
    position: relative;
  }
  .recipe-title {
    position: absolute;
    top: 10px;
    left: 20px;
    h4 {
      color: #ffffff;
      font-size: 2rem;
      line-height: 2.5rem;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
      transition: 0.2s ease-in-out;
      &:hover {
        color: var(--mainColor);
      }
    }
  }
  p {
    color: var(--darkGray);
    line-height: 1.2rem;
    margin: 0.1rem 0rem 0.5rem 0rem;
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
    height: 400px;
    transition: all 0.2s linear;
    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    .recipe {
      flex-basis: 100%;
    }
    .recipe-title {
      h4 {
        font-size: 2rem;
        line-height: 2rem;
      }
    }
    .Img {
      height: 200px;
    }
  }
`

const Wrapper = styled.div`
  /* Printing */
  @media print {
    .no-print {
      display: none;
    }
    .printable,
    .printable * {
      display: block;
    }
  }
  /* Component CSS */

  color: var(--darkGray);
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
    }
  }
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--darkGray);
  }
  .contentList {
    margin-top: 1rem;
    font-family: "Open Sans";
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
  .ingredients {
    margin-bottom: 2rem;
    .ingredientsList {
      margin: 0rem auto;
      li {
        list-style-type: none;
      }
    }
    .directionsList {
      margin: 0rem auto;
      li {
        list-style-type: none;
        margin-bottom: 1rem;
      }
    }
  }
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background: var(--mainColor);
    border: none;
    border-radius: 5px;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .details {
      width: 100%;
    }
    .ingredients {
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

export default Valentine
