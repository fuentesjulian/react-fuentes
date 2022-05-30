import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <section id="itemList">{greeting}</section>
  )
}

export default ItemListContainer