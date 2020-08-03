import React, { useState } from "react"
import { Link } from "gatsby"

import propcard from "../../assets/projects/propcard/thumbnail.jpg"
import propcardApp from "../../assets/projects/propcard-app/thumbnail.png"

export const ProjectsGrid = props => {
  const [projects] = useState([
    {
      id: "propcard",
      client: "Propcard",
      thumbnail: propcard,
      description:
        "Building a frictionless website platform for real estate agents.",
    },
    {
      id: "propcard-app",
      client: "Propcard",
      thumbnail: propcardApp,
      description: "Creating a dynamic communication tool for property teams.",
    },
  ])

  return (
    <section>
      <div className="container">
        <div className="grid-parent animate">
          <h2 className="grid-item">Featured Projects</h2>
        </div>
        <div className="grid-parent projects-grid">
          {projects.map(project => (
            <Link
              to={`/projects/${project.id}`}
              className="grid-item animate"
              key={project.id}
            >
              <div className="image-cover">
                <img src={project.thumbnail} alt={project.client} />
              </div>
              <div className="image-caption">
                <p className="subtitle">
                  <strong>{project.client}</strong> — {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
