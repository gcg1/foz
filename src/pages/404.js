import React from "react"
import Div100vh from "react-div-100vh"
import { Layout } from "./components/layout"
import { Header } from "./components/header"
import { LinkButton } from "./components/linkButton"

export default function NotFound() {
  return (
    <Layout dark={true}>
      <div className="page-not-found">
        <Header />
        <Div100vh>
          <section className="masthead">
            <div className="grid-parent animate animate--delayed">
              <div className="grid-item">
                <p className="headline headline--massive">404</p>
                <p className="translucent">The page could not be found.</p>
                <LinkButton href="/" inline={true} text="Back to home" />
              </div>
            </div>
          </section>
        </Div100vh>
      </div>
    </Layout>
  )
}
