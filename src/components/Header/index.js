import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';
import moonIcon from '../../assets/icons/moon.svg';
import sunIcon from '../../assets/icons/sunny.svg';

export default function Header({ onToggleTheme }) {
  const theme = useContext(ThemeContext);
  const icon = theme.type === 'dark' ? sunIcon : moonIcon;

  return (
    <Container>
      <h1>Where in the world?</h1>
      <button type="button" onClick={onToggleTheme}>
        <img src={icon} alt="moon" />
        <p>{theme.type === 'dark' ? 'light mode' : 'dark mode'}</p>
      </button>
    </Container>
  );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
