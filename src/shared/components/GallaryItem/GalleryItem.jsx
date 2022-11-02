import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import PropTypes from 'prop-types';
import styles from './gallaryitems.module.scss'



export default function GalleryItem({largeImageURL,tags,webformatURL}) {
  const [openModal, setOpenModal] = useState(false)

    const toggle = () => {
    setOpenModal(openModal => !openModal);
  };

  return (
    <>
        <li className={styles.item} onClick={toggle}>
          <img
            loading="lazy"
            className={styles.itemimage}
            src={webformatURL}
            alt={tags}
          />
        </li>
        {openModal && (
          <Modal toggle={toggle} image={largeImageURL} tags={tags} />
        )}
    </>
  )
}


// export default class ImageGalleryItem extends Component {
//   state = {
//     openModal: false,
//   };

//   toggle = () => {
//     this.setState(prev => {
//       return {
//         openModal: !prev.openModal,
//       };
//     });
//   };

//   render() {
//     const { toggle } = this;
//     const { openModal } = this.state;
//     const { largeImageURL, tags, webformatURL } = this.props;
//     return (
//       <>
//         <li className={styles.item} onClick={toggle}>
//           <img
//             loading="lazy"
//             className={styles.itemimage}
//             src={webformatURL}
//             alt={tags}
//           />
//         </li>
//         {openModal && (
//           <Modal toggle={toggle} image={largeImageURL} tags={tags} />
//         )}
//       </>
//     );
//   }
// }

GalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
};
