import React from "react"
import Header from "../components/header"
import TextBlock from "../components/textBlock"
import PreFooter from "../components/preFooter"
import Footer from "../components/footer"
import Layout from "../components/layout"

import desktop from "../../assets/projects/propcard/desktop.jpg"
import platform from "../../assets/projects/propcard/platform.jpg"

import peopleCoverVideo from "../../assets/projects/propcard/people/cover.mp4"
import peopleProperties from "../../assets/projects/propcard/people/properties.png"
import peopleAbout from "../../assets/projects/propcard/people/about.png"
import peopleTestimonial from "../../assets/projects/propcard/people/testimonial.png"
import peopleMarketing from "../../assets/projects/propcard/people/marketing.png"
import peopleContact from "../../assets/projects/propcard/people/contact.png"

import propertyCover from "../../assets/projects/propcard/property/cover.png"
import propertyDetails from "../../assets/projects/propcard/property/details.png"
import propertyGallery from "../../assets/projects/propcard/property/gallery.png"
import propertyMap from "../../assets/projects/propcard/property/map.png"
import propertyFilm from "../../assets/projects/propcard/property/film.mp4"
import propertyContact from "../../assets/projects/propcard/property/contact.png"

export default function Propcard(props) {
  // useEffect(() => {
  //   props.darkModeOn(true);
  // });

  return (
    <Layout dark={true}>
      <div className="project-page">
        <Header />
        <div className="spacer"></div>

        <div className="grid-parent animate">
          <div className="grid-item grid-item--middle ">
            <p className="headline headline--inline">
              Building a website platform for real estate agents
            </p>
          </div>
        </div>

        <div className="container animate animate--delayed">
          <img src={desktop} alt="Desktop Mockups" />
        </div>

        <TextBlock
          title="The Challenge"
          text="Real estate agents increasingly rely on their online presence to close new clients, but existing website solutions were painful to maintain and failed to adequately support their business or their brand. The goal was to create a frictionless platform for agents to showcase themselves and their properties."
        />

        <div className="container animate">
          <img src={platform} alt="CMS and Marketing Site" />
        </div>

        {/* <TextBlock title="" text="" /> */}

        <div className="container">
          <div className="grid-parent animate">
            <div className="grid-item">
              <div className="mobile-screens-container">
                <video
                  className="mobile-screen"
                  src={peopleCoverVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
                <img
                  className="mobile-screen"
                  src={peopleProperties}
                  alt="Mobile Properties Screen"
                />
                <img
                  className="mobile-screen"
                  src={peopleAbout}
                  alt="Mobile About Screen"
                />
                <img
                  className="mobile-screen"
                  src={peopleTestimonial}
                  alt="Mobile Testimonial Screen"
                />
                <img
                  className="mobile-screen"
                  src={peopleMarketing}
                  alt="Mobile Marketing Screen"
                />
                <img
                  className="mobile-screen"
                  src={peopleContact}
                  alt="Mobile Contact Screen"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <TextBlock title="" text="" /> */}

        <div className="container">
          <div className="grid-parent animate">
            <div className="grid-item">
              <div className="mobile-screens-container">
                <img
                  className="mobile-screen"
                  src={propertyCover}
                  alt="Mobile Property Screen"
                />
                <img
                  className="mobile-screen"
                  src={propertyDetails}
                  alt="Mobile Details Screen"
                />
                <img
                  className="mobile-screen"
                  src={propertyGallery}
                  alt="Mobile Gallery Screen"
                />
                <img
                  className="mobile-screen"
                  src={propertyMap}
                  alt="Mobile Map Screen"
                />
                <video
                  className="mobile-screen"
                  src={propertyFilm}
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
                <img
                  className="mobile-screen"
                  src={propertyContact}
                  alt="Mobile Contact Screen"
                />
              </div>
            </div>
          </div>
        </div>

        <TextBlock
          title="Results"
          text="A successful minimum viable product (MVP) launch enabled Propcard to secure initial paying customers, raise funding at a multi-million dollar valuation and hire world-class engineering talent. Following public release, the product saw month-over-month growth of 25% and has become the preferred solution for the top-performing agents, teams and brokerages in the US."
          buttonHref="https://propcard.com"
          buttonText="Visit Propcard"
        />

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
