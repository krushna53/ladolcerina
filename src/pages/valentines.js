import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import ValentineList from "../components/valentine/ValentineList"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Valentine" />
      <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
        <HeaderLogo title="VALENTINES DAY MENU" />
      </Section>
      <Section
        style={{
          width: "100vw",
          margin: "4rem auto 6rem auto",
          flexWrap: "wrap",
        }}
      >
        <ValentineList />
          <Section>
              <p>
                  <p style={{ fontWeight: "bold"}}> Connect with me! </p>

                  <p> Rina Thoma</p>

             <p> Chef l Best-Selling Author</p>

                  <p>Email: <a style={{ textDecoration: "none" }} href={`mailto:rina.thoma@gmail.com`}>rina.thoma@gmail.com</a></p>

                  <p> Website:  <a style={{ textDecoration: "none" }} href={`https://www.ladolcerina.com`}>www.ladolcerina.com</a></p>

                  <p> Instagram: <a style={{ textDecoration: "none" }} href={`https://www.instagram.com/la_dolce_rina`}>la_dolce_rina</a></p>

                  <p> You can purchase Bushels & Feasts on Amazon or download the eBook instantly on my website for only $20.</p>
              </p>
          </Section>

      </Section>
    </Layout>
  )
}

export default Recipes
