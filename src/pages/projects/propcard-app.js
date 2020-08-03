import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import TextBlock from "../components/textBlock"
import PreFooter from "../components/preFooter"
import Footer from "../components/footer"
import Layout from "../components/layout"

// import desktop from "../../assets/projects/propcard/desktop.jpg"
// import platform from "../../assets/projects/propcard/platform.jpg"

import assemblage from "../../assets/projects/propcard-app/assemblage.jpg"
import onboarding from "../../assets/projects/propcard-app/onboarding.png"

import home from "../../assets/projects/propcard-app/home.png"
import channel from "../../assets/projects/propcard-app/channel.png"
import toolbar from "../../assets/projects/propcard-app/toolbar.png"

import listings from "../../assets/projects/propcard-app/listings.png"
import plan from "../../assets/projects/propcard-app/plan.png"
import workflow from "../../assets/projects/propcard-app/workflow.png"

export default function PropcardApp(props) {
  // useEffect(() => {
  //   props.darkModeOn(true);
  // });

  return (
    <Layout dark={false}>
      <SEO title="Propcard" />
      <div className="project-page">
        <Header />
        <div className="spacer"></div>

        <div className="grid-parent animate">
          <div className="grid-item grid-item--middle ">
            <p className="headline headline--inline">
              Creating a communication platform for property teams
            </p>
          </div>
        </div>

        <div className="container animate animate--delayed">
          <div className="grid-parent">
            <div className="grid-item">
              <img src={assemblage} alt="App Components" />
            </div>
          </div>
        </div>

        <TextBlock
          title="The Challenge"
          text="Early user research indicated that although property teams loved the idea of communication platforms like Slack and Microsoft Teams, the fluctuation of team members between transactions meant pre-existing solutions like Slack and Microsoft teams were falling flat. Our goal was to create a central source of truth — a platform to communicate and coordinate the work around real estate transactions for agents and home owners through to transaction coordinators and brokerage management."
        />

        <div className="container animate">
          <img src={onboarding} alt="Onboarding Flow" />
        </div>

        {/* <TextBlock title="" text="" /> */}

        <div className="container">
          <div className="grid-parent animate">
            <div className="grid-item">
              <div className="mobile-screens-container">
                <img className="mobile-screen" src={home} alt="Home Screen" />
                <img
                  className="mobile-screen"
                  src={toolbar}
                  alt="Chat Toolbar"
                />
                <img className="mobile-screen" src={channel} alt="Channel" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid-parent animate">
            <div className="grid-item">
              <div className="mobile-screens-container">
                <img
                  className="mobile-screen"
                  src={listings}
                  alt="Properties"
                />
                <img className="mobile-screen" src={plan} alt="Plan" />
                <img className="mobile-screen" src={workflow} alt="Workflow" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
        <div className="grid-parent animate">
          <div className="grid-item">
            <div className="mobile-screens-container">
              <img className="mobile-screen" src={create} alt="Create Task" />
              <img className="mobile-screen" src={task} alt="Task" />
            </div>
          </div>
        </div>
      </div> */}

        {/* <TextBlock
        title="Results"
        text=""
        buttonHref="https://propcard.com"
        buttonText="Visit Propcard"
      /> */}

        <div className="container">
          <div className="grid-parent animate">
            <div className="grid-item grid-item--middle">
              <div className="services-container">
                <div className="service-list">
                  <h5>Strategy</h5>
                  <p>UX Strategy</p>
                  <p>Information Architecture</p>
                  <p>Concept Testing</p>
                </div>

                <div className="service-list">
                  <h5>Design</h5>
                  <p>UX / UI Design</p>
                  <p>Creative Direction</p>
                  <p>Visual Design</p>
                </div>

                <div className="service-list">
                  <h5>Build</h5>
                  <p>Product Management</p>
                  <p>Front-End Development</p>
                  <p>Technical Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PreFooter />
        <Footer />
      </div>
    </Layout>
  )
}
