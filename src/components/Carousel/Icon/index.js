/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-tag-location */
// == Import
import PropTypes from 'prop-types';


// == Style
import './styles.scss';

import {
  BiEditAlt,
  BiBot,
  BiMapAlt,
} from 'react-icons/bi';

// == Composant
function Icon({ iconSelector }) {
  const args = {
    size: '25%',
  };
  if (iconSelector === 'BiEditAlt') {
    return (
      <BiEditAlt size={args.size} />
    );
  }

  if (iconSelector === 'BiBot') {
    return (
      <BiBot size={args.size} />
    );
  }

  if (iconSelector === 'BiMapAlt') {
    return (
      <BiMapAlt size={args.size} />
    );
  }
}

Icon.propTypes = {
  iconSelector: PropTypes.string.isRequired,
};

// == Export
export default Icon;
