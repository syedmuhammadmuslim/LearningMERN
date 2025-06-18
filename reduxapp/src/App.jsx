import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./components/store";
// import Counter from "./components/simpleCounterApp/Counter";
// import Counter from "./components/rtkApp/Counter";
import ToDoApp from "./components/reduxToDoApp/ToDoApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container my-3">
        <Provider store={store}>
          {/* <Counter /> */}
          <ToDoApp />
        </Provider>
      </div>
    </>
  );
}

export default App;
