import React from 'react'

export default function DetailsItem({image:Image, children}) {
  return (
    <span className="details__items-item">
      <div className="details__items-item-image">
        <Image />
      </div>
      <span className="details__items-item-title">Температура</span>
      <span className="details__items-item-description">
        {children}
      </span>
    </span>
  )
}
