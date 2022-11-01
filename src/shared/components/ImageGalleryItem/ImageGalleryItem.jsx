import React from "react"
import GallaryItem from 'shared/components/GallaryItem/GalleryItem'
import styles from "./image-galleryItems.module.scss"
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ items }) {
  return (
    <ul className={styles.gallery}>
      {items.map(item => {
        return <GallaryItem key={item.id} {...item}/>
      })}
    </ul>
  )
}


ImageGalleryItem.propTypes = {
  items: PropTypes.array.isRequired,
}
