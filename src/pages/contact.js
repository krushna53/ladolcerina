import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
        <HeaderLogo />
      </Section>
      <Section
        style={{ width: "80vw", margin: "0rem auto", padding: "2rem 0rem" }}
      >
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default Contact
