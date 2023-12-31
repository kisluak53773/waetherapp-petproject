import React from 'react'
import PropTypes from 'prop-types'

export default function Triangle({active}) {
  return (
    <svg width="13" height="13" className={active ? "header__select-triangle header__select-triangle_rotate" : "header__select-triangle"} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_254)">
      <path d="M6.85674 9.86232L12.853 3.84944C13.0493 3.65243 13.049 3.33348 12.852 3.1368C12.655 2.94028 12.3358 2.94079 12.1393 3.13782L6.49998 8.7928L0.860642 3.13762C0.66412 2.94061 0.345189 2.9401 0.148159 3.1366C0.0493898 3.23519 4.75199e-06 3.36435 4.74634e-06 3.49351C4.74071e-06 3.62235 0.0490589 3.751 0.147142 3.84941L6.14324 9.86232C6.23764 9.9572 6.36612 10.0104 6.49998 10.0104C6.63384 10.0104 6.76216 9.95705 6.85674 9.86232Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="clip0_2_254">
        <rect width="13" height="13" fill="white" transform="translate(13) rotate(90)"/>
      </clipPath>
    </defs>
    </svg>
  )
}

Triangle.propTypes={
  active: PropTypes.bool.isRequired,
}