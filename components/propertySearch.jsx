// import React, { useState } from 'react';
// import SearchForm from './SearchForm';
// import SearchResults from './SearchResults';
// import axios from 'axios';

// export const PropertySearch = () => {
//   const [hasSearched, setHasSearched] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (criteria) => {
//     try {
//       const response = await axios.get('/api/search', { params: criteria });
//       setSearchResults(response.data);
//       setHasSearched(true);
//     } catch (error) {
//       console.error('Error searching properties:', error);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {hasSearched && <SearchResults results={searchResults} />}
//     </div>
//   );
// };

