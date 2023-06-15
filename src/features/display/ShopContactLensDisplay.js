import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import AnimatedShopContactLensDisplayCard from './AnimatedShopContactLensDisplayCard';
import { CONTACTLENSES } from '../../app/shared/CONTACTLENSES';
import ALCONPRICES from '../../app/shared/ALCONPRICES';
import BAUSCHPRICES from '../../app/shared/BAUSCHPRICES';
import COOPERPRICES from '../../app/shared/COOPERPRICES';
import VISTAKONPRICES from '../../app/shared/VISTAKONPRICES';

const PriceArray = [...VISTAKONPRICES, ...ALCONPRICES, ...COOPERPRICES, ...BAUSCHPRICES];

const ShopContactLensDisplay = () => {
  const items = CONTACTLENSES;
  const [filters, setFilters] = useState({
    brand: '',
    manuf: '',
    name: '',
    toricFilter: false,
    mfFilter: false,
    scheduleFilter: ''
  });

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  const handleCheckboxChange = (filter) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  const filteredItems = items.filter((item) => {
    const brandMatch = item.brand.toLowerCase().includes(filters.brand.toLowerCase());
    const manufMatch = item.manuf.toLowerCase().includes(filters.manuf.toLowerCase());
    const nameMatch = item.name.toLowerCase().includes(filters.name.toLowerCase());
    const toricFilterMatch = filters.toricFilter ? item.toric === true : true;
    const mfFilterMatch = filters.mfFilter ? item.multifocal === true : true;
    const colorFilterMatch = filters.colorFilter ? item.color === true : true;
    const scheduleFilterMatch = filters.scheduleFilter
      ? PriceArray.some(
        (price) => price.name === item.name && price.schedule === filters.scheduleFilter
      )
      : true;

    return (
      brandMatch &&
      manufMatch &&
      nameMatch &&
      toricFilterMatch &&
      mfFilterMatch &&
      colorFilterMatch &&
      scheduleFilterMatch
    );
  });

  const clearFilters = () => {
    setFilters({
      brand: '',
      manuf: '',
      name: '',
      toricFilter: false,
      mfFilter: false,
      scheduleFilter: '',
    });
  };

  return (
    <div className="container-filter">
      <div className="sidebar">
        <h3>Filters</h3>
        <br />
        <label>
          Manufacturer:
          <br />
          <input
            type="text"
            value={filters.manuf}
            onChange={(e) => handleFilterChange('manuf', e.target.value)}
            style={{ width: '100px' }}
          />
        </label>
        <br />
        <br />
        <label>
          Lens Name:
          <br />
          <input
            type="text"
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            style={{ width: '100px' }}
          />
        </label>
        <hr />
        <div>Lens type:</div>
        <label>
          <input
            type="checkbox"
            checked={filters.toricFilter}
            onChange={() => handleCheckboxChange('toricFilter')}
          />
          Astigmatism / Toric
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={filters.mfFilter}
            onChange={() => handleCheckboxChange('mfFilter')}
          />
          Multifocal / Bifocal
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={filters.colorFilter}
            onChange={() => handleCheckboxChange('colorFilter')}
          />
          Colors / Tint
        </label>
        <hr />
        <div>Schedule:</div>
        <label>
          <input
            type="radio"
            value="DD"
            checked={filters.scheduleFilter === 'DD'}
            onChange={() => handleFilterChange('scheduleFilter', 'DD')}
          />
          Daily Disposable
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="2W"
            checked={filters.scheduleFilter === '2W'}
            onChange={() => handleFilterChange('scheduleFilter', '2W')}
          />
          2-Week Replacement
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="1M"
            checked={filters.scheduleFilter === '1M'}
            onChange={() => handleFilterChange('scheduleFilter', '1M')}
          />
          Monthly Replacement
        </label>
        <div className="clear-filters">
          <span className="clear-filters-link" onClick={clearFilters}>
            Clear Filters
          </span>
        </div>
      </div>

      <div className="content" style={{ maxHeight: 'calc(100vh - 320px)' }}>
        {filteredItems.length === 0 && <div>No results found.</div>}
        {filteredItems.length > 0 && (
          <Row>
            {filteredItems.map((item, idx) => {
              const { name: itemName } = item;
              const matchingPrices = PriceArray.filter((price) => price.name === itemName);
              const prices = matchingPrices.map(({ boxID, MSRP, schedule }) => ({
                boxID,
                MSRP,
                schedule,
              }));

              return (
                <Col xs="12" sm="12" md="6" xl="4" className="mb-4" key={idx}>
                  <AnimatedShopContactLensDisplayCard item={item} prices={prices} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
};

export default ShopContactLensDisplay;
