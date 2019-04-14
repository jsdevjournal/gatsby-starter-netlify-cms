import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const AuthorsPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Authors | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-2 is-bold-light">Authors</h1>
            <ul className="taglist">
              {
                // group.map(author => (
                //   <li key={author.fieldValue}>
                //     <Link to={`/authors/${kebabCase(author.fieldValue)}/`}>
                //       {author.fieldValue}
                //     </Link>
                //   </li>
                // ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AuthorsPage

export const authorPageQuery = graphql`
  query AuthorsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            name
            templateKey
            description
            image {
              publicURL

            }
          }
        }
      }
    }
  }
`
