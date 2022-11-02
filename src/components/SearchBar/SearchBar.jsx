import { useState } from 'react';
import { Notify } from 'notiflix'
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './seachbar.module.scss'


export default function SearchBar({onSubmit}) {
  const [imageName, setImageName] = useState('')

  const handleChange = e => {
  setImageName( e.currentTarget.value.toLowerCase())
  }

    const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      return Notify.info('Enter image name');
    }
    onSubmit({ imageName });
    setImageName('');
    e.currentTarget.reset();
  }

  return (
    <header className={styles.searchbar}>
        <form className={styles.searchform} onSubmit={handleSubmit}>
          <button type='submit' className={styles.searchformbutton}>
            <AiOutlineSearch size='25'/>
          </button>

          <input
            className={styles.searchforminput}
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            onChange={handleChange}
          />
        </form>
    </header>
  )
}


// export default class SearchBar extends Component {
//   state = {
//     imageName: '',
//   }

//   handleChange = e => {
//     this.setState({ imageName: e.currentTarget.value.toLowerCase()})
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.imageName.trim() === '') {
//       return Notify.info('Enter image name');
//     }
//     this.props.onSubmit({ ...this.state });
//     this.setState({ imageName: '' });
//     e.currentTarget.reset();
//   }

//   render() {
//     return (
//       <header className={styles.searchbar}>
//         <form className={styles.searchform} onSubmit={this.handleSubmit}>
//           <button type='submit' className={styles.searchformbutton}>
//             <AiOutlineSearch size='25'/>
//           </button>

//           <input
//             className={styles.searchforminput}
//             type='text'
//             autoComplete='off'
//             autoFocus
//             placeholder='Search images and photos'
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     )
//   }
// }

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
