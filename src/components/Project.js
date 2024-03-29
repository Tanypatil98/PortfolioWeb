import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `);
  image = data.allFile.nodes.filter(obj => obj.relativePath.includes(image))[0].childImageSharp.fluid.src;
  return (
    <article className="project">
      <img
        src={image}
        className="project-img"
        alt={title}
        width="511"
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
