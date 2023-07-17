import React, { useState } from 'react';
import Records from '../jsonplaceholder.json';
import '../styles/Blog.css';
function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(event.target);
  };

  const filteredAndSortedRecords = () => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return Records.filter((record) =>
        record.title.toLowerCase().includes(lowerCaseQuery)
      ).sort((a, b) => b.title.length - a.title.length);
    }
    return Records;
  };

  const sortedRecords = filteredAndSortedRecords();

  const blogClassName = searchQuery ? 'blog-inline' : 'blog';

  return (
    <>
      <div className='search'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder='Search'
          id='searchBar'
        />
      </div>
      <div className={blogClassName}>
        {sortedRecords.map((record) => {
          let titleElement;

          if (record.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            titleElement = (
              <span>
                {record.title.split(new RegExp(`(${searchQuery})`, 'i')).map((part, index) => {
                  if (part.toLowerCase() === searchQuery.toLowerCase()) {
                    return (
                      <span key={index} className='highlight'>
                        {part}
                      </span>
                    );
                  } else {
                    return <span key={index}>{part}</span>;
                  }
                })}
              </span>
            );
          } else {
            titleElement = <span>{record.title}</span>;
          }

          return (
            <div className='record' key={record.id}>
              <h2>{titleElement}</h2>
              <p>{record.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;