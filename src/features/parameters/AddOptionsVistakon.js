import React from 'react';

const AddOptionsVistakon = ({ selectedAdd, setSelectedAdd, onSelectAdd }) => {
    const handleChange = (event) => {
      const selectedAdd = event.target.value;
      setSelectedAdd(selectedAdd);
      onSelectAdd(selectedAdd);
    };
  
    return (
      <div className="dropdown-item">
        <select id="addSelect" value={selectedAdd} onChange={handleChange}>
          <option value="">Select Add</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    );
  };
  

export default AddOptionsVistakon;