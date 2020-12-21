import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
// Styles
import './Summary.css';

/*
 * TODO
 *
 * Requirements:
 * - use React hooks if needed
 * - use performance optimization if needed
 * 
 */ 
const Summary = ({
  config = null,
  models = null,
  totalPrice = 0
}) => {
  const selectedModel = models?.find(model => model?.key === config?.model);
  const selectedType = selectedModel?.types?.find(type => type.value === config?.car_type);
  const selectedColor = selectedModel?.colors?.find(color => color.value === config?.color);
  const selectedWheels = selectedModel?.wheels?.find(wheels => wheels.value === config?.wheels);
  const selectedInteriorColor = selectedModel?.interiorColors?.find(interiorColor => interiorColor.value === config?.interior_color);
  const selectedInteriorLayout = selectedModel?.interiorLayouts?.find(interiorLayout => interiorLayout.value === config?.interior_layout);

  return (
    <div className="summary">
      <h1>Your {selectedModel?.name}</h1>
      <p className="summary-edd">Estimated delivery: 5-9 weeks</p>
      <div className="summary-content">
        <p>Summary</p>
        <ul>
          <li>
            <span>{selectedModel?.name} {selectedType?.label}</span>
            <span>{formatPrice(selectedType?.price)}</span>
          </li>
          <li>
            <span>{selectedColor?.label}</span>
            <span>{formatPrice(selectedColor?.price)}</span>
          </li>
          <li>
            <span>{selectedWheels?.label}</span>
            <span>{formatPrice(selectedWheels?.price)}</span>
          </li>
          <li>
            <span>{selectedInteriorColor?.label}</span>
            <span>{formatPrice(selectedInteriorColor?.price)}</span>
          </li>
          <li>
            <span>{selectedInteriorLayout?.label}</span>
            <span>{formatPrice(selectedInteriorLayout?.price)}</span>
          </li>
        </ul>
        <p>
          <span>Total price</span>
          <span>{formatPrice(totalPrice)}</span>
        </p>
      </div>
    </div>
  );
};

Summary.propTypes = {
  config: PropTypes.object,
  models: PropTypes.array,
  totalPrice: PropTypes.number
};

export default Summary;
