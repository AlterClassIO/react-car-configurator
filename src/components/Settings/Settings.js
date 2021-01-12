import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
// Styles
import './Settings.css';
// Components
import Option from '../Option';

/*
 * TODO: Refactor Editor to leverage React hooks
 *
 * Requirements:
 * - store selectedOptions in React state using the useState hook 
 * - initialize state using lazy initialization
 * - use other React hooks if needed
 * 
 */ 
const Settings = ({
  config = null,
  settings = null,
  onSelectOption = () => null
}) => {

  const selectedOptions = settings?.reduce(
    (acc, setting) => ({
      ...acc,
      [setting.prop]: setting.options.find(option =>
        option.value === config[setting.prop]
      ) ?? []
    }),
    {}
  );

  return (
    <div className="settings">
      {
        settings?.map(setting => {
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
                      active={config?.[setting.prop] === option.value}
                      onSelectOption={(value) =>
                        onSelectOption(setting.prop, value)
                      }
                    />
                  ))
                }
              </div>
              {
                setting.type !== "text" ? (
                  <div className="settings-group-label">
                    <span>{selectedOptions?.[setting.prop]?.label}</span>
                    <span className="price">
                      {formatPrice(selectedOptions?.[setting.prop]?.price)}
                    </span>
                  </div>
                ) : null
              }
              {
                selectedOptions?.[setting.prop]?.benefits ? (
                  <div className="settings-group-benefits">
                    <p>Model {config.model.toUpperCase()} {selectedOptions[setting.prop].label} includes:</p>
                    <ul>
                      {
                        selectedOptions?.[setting.prop]?.benefits?.map((benefit, i) => (
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
