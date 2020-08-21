import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import Boxes from "../components/boxes"
import Gallery from "../components/gallery"
import Intro from "../components/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
      <HeaderLogo />
    </Section>
    <Section style={{ width: "100vw", margin: "0rem auto" }}>
      <Boxes />
    </Section>
    <Section style={{ width: "100vw", margin: "0rem auto" }}>
      <Intro />
    </Section>
    <Gallery />
  </Layout>
)

export default IndexPage
