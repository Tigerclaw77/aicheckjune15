import React from 'react';

const AddOptionsBausch = ({ selectedAdd, setSelectedAdd, onSelectAdd }) => {
    const handleSelectAdd = (event) => {
        const selectedAdd = event.target.value;
        setSelectedAdd(selectedAdd);
        onSelectAdd(selectedAdd);
    };

    return (
        <div className="dropdown-item">
            <select id="addSelect" value={selectedAdd} onChange={handleSelectAdd}>
                <option value="">Select Add</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
            </select>
        </div>
    );
};

export default AddOptionsBausch;
