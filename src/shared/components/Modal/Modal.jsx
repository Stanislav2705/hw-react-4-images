import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.scss'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.toggle();
  };

  clickOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.toggle();
    }
  };

  render() {
    const { image, tags } = this.props;
    const { clickOnBackdrop } = this;
    return createPortal(
      <div className={styles.overlay} onClick={clickOnBackdrop}>
        <div className={styles.modal}>
          <img src={image} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggle: PropTypes.func,
  image: PropTypes.string,
  tags: PropTypes.string,
};
