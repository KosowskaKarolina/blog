import React, { useState } from 'react';
import Records from '../jsonplaceholder.json';
import '../styles/Blog.css';

function Blog() {
  const [sortOption, setSortOption] = useState('sort-default');
  const sortByInteresting = () => {
    const sortedRecords = [...Records];
    sortedRecords.sort((a, b) => {
      if (a.body.length === b.body.length) {
        return a.id - b.id;
      } else {
        return b.body.length - a.body.length;
      }
    });
    return sortedRecords;
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  let sortedRecords;
  if (sortOption === 'the-most-interesting') {
    sortedRecords = sortByInteresting();
  } else {
    sortedRecords = Records;
  }

  return (
    <div className='blog'>
      <div className='sort'>
        <div className='sort-posts'>
          <form action='#'>
            <label htmlFor='sort' id='label-sort'>Sort by: </label>
            <select
              name='sortby'
              id='sortby'
              className='sort-section'
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value='sort-default'>Default</option>
              <option value='the-most-interesting'>The most interesting</option>
            </select>
          </form>
        </div>
      </div>

      {sortedRecords.map((record) => {
        return (
          <div className='record' key={record.id}>
            <h2>{record.title}</h2>
            <p>{record.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Blog;