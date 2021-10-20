# Json Server Skeleton Project

It is a small project that uses [json-server](https://www.npmjs.com/package/json-server) to create REST API from data.json file with support for Filter, Pagination, Sort, and Full-Text Search. For development purposes only.

## Usage

```javascript
// run server
npm start


// Filtter
http://localhost:4000/data?name=santos13

// Pagination
http://localhost:4000/data?_page=1&_limit=4

// Sort
http://localhost:4000/data?sort=id&_order=asc

// Full-Text search

http://localhost:4000/data??q=hotmail

```
