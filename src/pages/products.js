import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ProductCard from '../components/productcard'

class ProductIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allContentfulProduct.edges')

    return (
      <Layout>
        <Helmet title={siteTitle} />
        <h1>Product</h1>
        {products.map((product) => {
          return <ProductCard {...product.node} />
        })}
      </Layout>
    )
  }
}

export default ProductIndex

export const productQuery = graphql`
  query productQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      edges {
        node {
          category
          description
          name
          price
          slug
        }
      }
    }
  }
`
