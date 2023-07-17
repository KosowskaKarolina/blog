import React, { useState, useEffect } from 'react';
import '../styles/Blog.css';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAndSortedRecords = () => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return records
        .filter((record) => record.title.toLowerCase().includes(lowerCaseQuery))
        .sort((a, b) => b.title.length - a.title.length);
    }
    return records;
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
