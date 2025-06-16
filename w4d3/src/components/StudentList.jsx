import React, { useState, useRef } from "react";

const students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Usman" },
];

const StudentList = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const cardRefs = useRef([]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const scrollToCard = (index) => {
    cardRefs.current[index].scrollIntoView({ behavior: "smooth" });
    cardRefs.current[index].style.backgroundColor = "yellow";
    setTimeout(() => {
      cardRefs.current[index].style.backgroundColor = "";
    }, 2000);
  };

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container my-3">
      <input
        className="form-control my-3"
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search student"
      />
      <button className="btn btn-primary my-3" onClick={focusInput}>
        Focus Search
      </button>
      <ul className="list-group my-3 w-25">
        {filtered.map((s, index) => (
          <li
            className="list-group-item border border-secondary my-2"
            key={s.id}
          >
            <div className="row">
              <div className="col-sm">{s.name} </div>
              <div className="col-sm">
                <button
                  className="btn btn-success"
                  onClick={() => scrollToCard(index)}
                >
                  Go to Card
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ height: "100vh" }}></div>
      {/* {students.map((s, index) => (
        <div
          className="card border border-secondary my-3 fs-1 w-25"
          key={s.id}
          ref={(el) => (cardRefs.current[index] = el)}
          //   style={{ border: "1px solid black", margin: 10, padding: 10 }}
        >
          {s.name}'s Card
        </div>
      ))} */}

      <div
        className="card border border-secondary my-3 fs-1 w-25"
        key={0}
        ref={(el) => (cardRefs.current[0] = el)}
        //   style={{ border: "1px solid black", margin: 10, padding: 10 }}
      >
        {students[0].name}'s Card
      </div>
      <div
        className="card border border-secondary my-3 fs-1 w-25"
        key={1}
        ref={(el) => (cardRefs.current[1] = el)}
        //   style={{ border: "1px solid black", margin: 10, padding: 10 }}
      >
        {students[1].name}'s Card
      </div>
      <div
        className="card border border-secondary my-3 fs-1 w-25"
        key={2}
        ref={(el) => (cardRefs.current[2] = el)}
        //   style={{ border: "1px solid black", margin: 10, padding: 10 }}
      >
        {students[2].name}'s Card
      </div>
    </div>
  );
};

export default StudentList;
