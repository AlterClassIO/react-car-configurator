import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <a
          href="https://alterclass.io/courses/react"
          className="logo"
        >
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
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