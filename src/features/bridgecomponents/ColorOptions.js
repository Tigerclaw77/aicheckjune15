import React, { useState } from 'react';

const ColorOptions = ({ lensName }) => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  let colorOptions = [];

  switch (lensName) {
    case 'Air Optix Colors':
      colorOptions = ['Gemstone Green', 'Green', 'Pure Hazel', 'Honey', 'Brown', 'Brilliant Blue', 'Blue', 'True Sapphire', 'Turquoise', 'Gray', 'Sterling Gray', 'Amethyst'];
      break;
    case 'Define':
      colorOptions = ['Natural Shine', 'Accent Style', 'Vivid Style'];
      break;
    case 'Dailies Colors':
      colorOptions = ['Mystic Blue', 'Mystic Hazel', 'Mystic Gray', 'Mystic Green'];
      break;
    case 'Freshlook Colorblends':
      colorOptions = ['Gemstone Green', 'Green', 'Pure Hazel', 'Honey', 'Brown', 'Brilliant Blue', 'Blue', 'True Sapphire', 'Turquoise', 'Gray', 'Sterling Gray', 'Amethyst'];
      break;
    default:
      colorOptions = [];
      break;
  }

  return (
    <div className="dropdown-item">
      <select
        id="colorSelect"
        value={selectedColor}
        onChange={(e) => handleColorChange(e.target.value)}
      >
        <option value="">Select Color</option>
        {colorOptions.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorOptions;
