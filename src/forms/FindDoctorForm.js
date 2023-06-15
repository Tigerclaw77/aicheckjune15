import React, { useState, useEffect } from 'react';

function OptometristsPage({ optometrists }) {
  // Step 5: Implement pagination
  const [currentPage, setCurrentPage] = useState(1);
  const optometristsPerPage = 10;

  function displayPage(pageNumber) {
    const startIndex = (pageNumber - 1) * optometristsPerPage;
    const endIndex = startIndex + optometristsPerPage;
    const optometristsPage = optometrists.slice(startIndex, endIndex);
    return <OptometristsList optometrists={optometristsPage} />;
  }

  function displayPagination() {
    const numPages = Math.ceil(optometrists.length / optometristsPerPage);
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <a href="#" onClick={() => setCurrentPage(i)}>
            {i}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pagination">{pages}</ul>
      </nav>
    );
  }

  // Step 6: Limit the number of optometrists displayed overall
  const maxOptometrists = 60;
  optometrists = optometrists.slice(0, maxOptometrists);

  return (
    <div>
      <OptometristsList optometrists={displayPage(currentPage)} />
      {displayPagination()}
    </div>
  );
}

function OptometristsList({ optometrists }) {
  return (
    <div>
      {optometrists.map(optometrist => (
        <div key={optometrist.id} className="optometrist">
          <h3>{optometrist.name}</h3>
          <p>{optometrist.address}</p>
          <p>{optometrist.phone}</p>
        </div>
      ))}
    </div>
  );
}

function FindDrForm() {
  const [optometrists, setOptometrists] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const zipCode = event.target.elements.zipCode.value;
    const apiUrl = `https://example.com/api/optometrists?zip=${zipCode}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(optometrists => setOptometrists(optometrists))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Enter your ZIP code:</label>
        <input type="text" name="zipCode" id="zipCode" required />
        <button type="submit">Search</button>
      </form>
      {optometrists.length > 0 && <OptometristsPage optometrists={optometrists} />}
    </div>
  );
}

export default FindDrForm;