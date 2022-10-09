// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'thumbnail'

  return (
    <li className="tab-item-container">
      <button className="tab-btn" onClick={onClickTabItem} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeTabBtnClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
