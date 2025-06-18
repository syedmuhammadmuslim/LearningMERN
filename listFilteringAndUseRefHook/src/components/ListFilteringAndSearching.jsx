import React, { useEffect } from "react";
import { useState } from "react";

const ListFilteringAndSearching = () => {
  const [search, setSearch] = useState("");
  const books = [
    { id: 1, title: "To Kill a Mockingbird" },
    { id: 2, title: "The Great Gatsby" },
    { id: 3, title: "1984" },
    { id: 4, title: "Pride and Prejudice" },
    { id: 5, title: "The Catcher in the Rye" },
    { id: 6, title: "The Hobbit" },
    { id: 7, title: "The Lord of the Rings" },
  ];

  const [searchedBooks, setSearchedBooks] = useState(books);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    search === ""
      ? setSearchedBooks(books)
      : setSearchedBooks(
          books.filter((book) => {
            return book.title.toLowerCase().includes(search.toLowerCase());
          })
        );
  }, [search]);

  return (
    <div className="container my-3">
      <input
        className="form-control border border-secondary border-1 my-3"
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <ul className="list-group border border-secondary border-bottom-1 border-top-0 border-start-0 border-end-0">
        {console.log("list rendered")}
        {filteredBooks.map((book) => (
          <li key={book.id} className="list-group-item border border-secondary">
            {book.title}
            {/* {console.log("list rendered")} */}
          </li>
        ))}
      </ul>
      {/* <ul className="my-5 list-group border border-secondary border-bottom-1 border-top-0 border-start-0 border-end-0">
        {searchedBooks.map((book) => (
          <li key={book.id} className="list-group-item border border-secondary">
            {book.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ListFilteringAndSearching;
