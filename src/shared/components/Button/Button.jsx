import React from "react";
import PropTypes from 'prop-types';
import styles from './button.module.scss'

export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.button}>
      Load more
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}
