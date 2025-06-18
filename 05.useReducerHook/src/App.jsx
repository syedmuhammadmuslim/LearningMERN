import React from "react";
import SimpleCounterApp from "./components/SimpleCounterApp";
import ToDoApp from "./components/ToDoApp";

function App() {
  return (
    <>
      <div className="container my-3">
        {/* <SimpleCounterApp /> */}
        <ToDoApp />
      </div>
    </>
  );
}

export default App;

// const [booksData, setBooksData] = useState([
//     {
//       id: 1,
//       data: {
//         name: "The Mocking Bird",
//         author: "Syed Muhammad Muslim",
//         organization: "GIKI",
//         address: { city: "RWP", town: "Muslim Town" },
//       },
//     },
//   ]);
