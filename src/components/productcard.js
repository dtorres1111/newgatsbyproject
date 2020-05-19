import React from 'react'
import { Link } from 'gatsby'

function ProductCard({ name, category, price, slug }) {
  return (
    <article>
      <h1>
        <Link to={'/' + slug}>{name}</Link>
      </h1>
      <p>
        DKK <span className="">{price}</span>
      </p>
    </article>
  )
}
export default ProductCard
