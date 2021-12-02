import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import List from './components/list/List';

const App = () => {
  const [state, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef')
      .then((res) => {
        console.log(res);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);

    if (searchTerm !== '') {
      const newListItem = state.filter((data) => {
        return Object.values(data)
          .join('')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setSearchResult(newListItem);
    } else {
      setSearchResult(state);
    }
  };

  return (
    <div className='app-wrapper'>
      <div className='food-item-wrapper'>
        <List
          state={searchTerm.length < 1 ? state : searchResult}
          searchTerm={searchTerm}
          searchKeyword={searchHandler}></List>
      </div>
    </div>
  );
};

export default App;
