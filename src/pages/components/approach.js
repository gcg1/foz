import React from "react"

export class Approach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          title: "Explore",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
          ),
          description:
            "We develop a deep understanding of the problem at hand through clear communication and research.",
        },
        {
          title: "Design",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z" />
                  <path d="M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z" />
                  <path d="M15,8c0-1.3-0.84-2.4-2-2.82V3h-2v2.18C9.84,5.6,9,6.7,9,8c0,1.66,1.34,3,3,3S15,9.66,15,8z M12,9c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C13,8.55,12.55,9,12,9z" />
                </g>
              </g>
            </svg>
          ),
          description:
            "We work closely with your customers to design and validate simple solutions and delightful experiences.",
        },
        {
          title: "Build",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          ),
          description:
            "We use the latest technologies and lean development methodologies to deliver efficient progress.",
        },
        {
          title: "Scale",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
            </svg>
          ),
          description:
            "We take an iterative and data-driven approach, evolving the solution to achieve desired outcomes.",
        },
      ],
    }
  }

  render() {
    return (
      <section className="scroll-marker">
        <div className="container">
          <div className="grid-parent animate">
            <h2 className="grid-item">Our Approach</h2>
          </div>

          <div className="grid-parent animate">
            <div className="grid-item approach-items-container">
              {this.state.items.map(item => (
                <div className="approach-item" key={item.title}>
                  <div className="item-header">
                    {item.icon}
                    <div className="line"></div>
                  </div>
                  <h5>{item.title}</h5>
                  <p className="translucent">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
