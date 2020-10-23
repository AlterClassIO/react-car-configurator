import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Menu.css';
// Icons
import { FaMoon, FaSun } from 'react-icons/fa';

class Menu extends React.Component {
  render() {
    const darkMode = false;

    const ModeIcon = darkMode ? FaSun : FaMoon;

    const brandLogo = darkMode
    ? `${process.env.PUBLIC_URL}/logo_white.svg`
    : `${process.env.PUBLIC_URL}/logo.svg`;

    return (
      <div className="menu-container">
        <a
          href="https://alterclass.io/courses/react"
          className="logo"
        >
          <img
            src={brandLogo}
            alt="AlterClass"
          />
        </a>
        <ul className="menu-nav">
          {
            this.props.items.map((item, i) => (
              <li
                key={item}
                onClick={() => this.props.onSelectItem(i)}
                className={this.props.selectedItem === i ? 'selected' : null}
              >
                <h2>{item}</h2>
              </li>
            ))
          }
        </ul>
        <ModeIcon
          className="mode-icon"
          onClick={() => null}
        />
      </div>
    );
  };
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.number,
  onSelectItem: PropTypes.func
};

export default Menu;