import React from "react"
import Layout from "./components/layout"
import Header from "./components/header"
import Masthead from "./components/masthead"
import Approach from "./components/approach"
import ProjectsGrid from "./components/projectsGrid"
import PreFooter from "./components/preFooter"
import Footer from "./components/footer"

const Home = () => {
  return (
    <Layout dark={true}>
      <div className="home-page">
        <Header />

        <Masthead />
        <Approach />
        <ProjectsGrid />

        <PreFooter />
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
