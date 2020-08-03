import React, { useState } from "react"
import Layout from "./components/layout"
import Header from "./components/header"
import Footer from "./components/footer"
import FormButton from "./components/formButton"

export default function Contact(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmission] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        // form.reset();
        setSubmission("SUCCESS")
      } else {
        setSubmission("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <Layout dark={false}>
      <div className="contact-page">
        <Header />
        <div className="small-spacer"></div>
        <div className="contact-form-container grid-parent animate">
          <div className="grid-item grid-item--middle">
            {submitted === "SUCCESS" && <div className="small-spacer"></div>}
            <p className="headline headline--massive headline--inline">
              {!submitted || submitted === "ERROR"
                ? "Get in touch"
                : "Thank you"}
            </p>
            <div>
              <p className="translucent">
                {!submitted || submitted === "ERROR"
                  ? `Not sure where to start? Tell us about your project, your
              timeline, how you heard about us and where you're based.`
                  : `We'll get back to you shortly.`}
              </p>
              {(!submitted || submitted === "ERROR") && (
                <div>
                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    action="https://formspree.io/xbjzwdyr"
                    method="POST"
                  >
                    <input
                      onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      name="name"
                      type="text"
                      required
                    ></input>
                    <input
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email"
                      name="email"
                      type="email"
                      required
                    ></input>
                    <textarea
                      onChange={e => setMessage(e.target.value)}
                      // value={message}
                      placeholder="Your message"
                      name="message"
                      type="text"
                      required
                    ></textarea>
                    <FormButton inline={true} text="Send" />
                  </form>
                  {submitted === "ERROR" && (
                    <p className="error-message">
                      There was a problem sending your message.
                      <br /> Please try again, or email us at{" "}
                      <a href="mailto:info@foz.agency">info@foz.agency</a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="small-spacer"></div>
        <Footer />
      </div>
    </Layout>
  )
}
