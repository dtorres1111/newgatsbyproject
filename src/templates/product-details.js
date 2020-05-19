import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

class ProductDetails extends React.Component {
  render() {
    const product = get(this, 'props.data.contentfulProduct')

    return (
      <Layout>
        <h1>{product.name}</h1>
        {product.image.map((img) => {
          return <Img fluid={img.fluid} />
        })}
        {product.description}
      </Layout>
    )
  }
}

export default ProductDetails

export const productQuerySingle = graphql`
  query productQuerySingle($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProduct(slug: { eq: $slug }) {
      description
      category
      name
      price
      sku
      slug
      stock
      image {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
