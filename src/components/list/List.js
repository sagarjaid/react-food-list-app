import React, { useRef } from 'react';
import './List.scss';

const List = ({ state, searchTerm, searchKeyword }) => {
  const inputEl = useRef('');
  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
  };

  return (
    <div>
      {/* list of searchbox */}

      <div className='search-flex'>
        <div className='back'>
          <i className='fas fa-arrow-left'></i>
        </div>
        <div className='search-input'>
          <input
            ref={inputEl}
            type='text'
            placeholder='search in menu'
            value={searchTerm}
            onChange={getSearchTerm}
          />
        </div>
      </div>

      <h3>Veg</h3>

      {/* list of items */}

      {state.map((data) => {
        return (
          <div key={data.id}>
            <div className='list-wrapper-flex'>
              <div className='list-info'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/1200px-Indian-vegetarian-mark.svg.png'
                  alt='veg-icon'
                  width='15px'
                />
                <h4>{data.name}</h4>
                <p className='price'>₹{data.price}</p>
                <p className='description'>{data.description}</p>
              </div>
              <div className='img-add'>
                <div className='img-card'>
                  <img
                    src={data.cloudinaryImageId}
                    alt='burger'
                    width='140px'
                  />
                  <button
                    onClick={() => {
                      console.log(data.name);
                    }}>
                    ADD
                  </button>
                </div>
                <p>customisable</p>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default List;
