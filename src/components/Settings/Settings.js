import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
// Styles
import './Settings.css';
// Components
import Option from '../Option';

class Settings extends React.Component {
  state = {
    selectedOptions: this.props?.settings?.reduce(
      (acc, setting) => ({
        ...acc,
        [setting.prop]: setting.options.find(option =>
          option.value === this.props?.config[setting.prop]
        ) ?? []
      }), {})
  };

  handleOnSelectOption = (option, setting) => {
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        [setting.prop]: option
      }
    }));
    this.props.onSelectOption(setting.prop, option.value);
  };

  render() {
    return (
      <div className="settings">
        {
          this.props?.settings?.map(setting => {
            if (!setting.options || setting.options.length === 0) {
              return null;
            }
            return (
              <div
                key={setting.label}
                className="settings-group"
              >
                <h3>{setting.label}</h3>
                {
                  setting.disclaimer_1 ? (
                    <p className="settings-group-disclaimer">
                      {setting.disclaimer_1}
                    </p>
                  ) : null
                }
                <div className={`settings-options settings-options-${setting.type}`}>
                  {
                    setting.options.map(option => (
                      <Option
                        {...option}
                        key={option.value}
                        type={setting.type}
                        price={formatPrice(option.price)}
                        active={this.props?.config?.[setting.prop] === option.value}
                        onSelectOption={() =>
                          this.handleOnSelectOption(option, setting)
                        }
                      />
                    ))
                  }
                </div>
                {
                  setting.type !== "text" ? (
                    <div className="settings-group-label">
                      <span>{this.state.selectedOptions?.[setting.prop]?.label}</span>
                      <span className="price">
                        {formatPrice(this.state.selectedOptions?.[setting.prop]?.price)}
                      </span>
                    </div>
                  ) : null
                }
                {
                  this.state.selectedOptions?.[setting.prop]?.benefits ? (
                    <div className="settings-group-benefits">
                      <p>Model {this.props.config.model.toUpperCase()} {this.state.selectedOptions[setting.prop].label} includes:</p>
                      <ul>
                        {
                          this.state.selectedOptions?.[setting.prop]?.benefits?.map((benefit, i) => (
                            <li key={i}>
                              {benefit}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ) : null
                }
                {
                  setting.disclaimer_2 ? (
                    <p className="settings-group-disclaimer">
                      {setting.disclaimer_2}
                    </p>
                  ) : null
                }
              </div>
          )})
        }
      </div>
    );
  };
};

Settings.propTypes = {
  config: PropTypes.object,
  settings: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
      prop: PropTypes.string,
      options: PropTypes.array
    })
  ),
  onSelectOption: PropTypes.func
};

export default Settings;
