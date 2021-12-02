// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {itemProps} = props
  const {headerText, description, className} = itemProps

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
