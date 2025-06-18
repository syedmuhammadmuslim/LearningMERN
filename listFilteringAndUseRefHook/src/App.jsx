import { useState } from "react";
import "./App.css";
import ListFilteringAndSearching from "./components/ListFilteringAndSearching";
import FocusInput from "./components/FocusInput";
import ScrollToDiv from "./components/ScrollToDiv";
import ChangeStyle from "./components/ChangeStyle";
import ToggleVisibility from "./components/ToggleVisibility";
import StudentList from "./components/StudentList";
import ScrollToDiv2 from "./components/ScrollToDiv2";
import ChangeStyle2 from "./components/ChangeStyle2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ListFilteringAndSearching />
      {ListFilteringAndSearching()}
      <FocusInput />
      <ScrollToDiv />
      <ScrollToDiv2 />
      <ChangeStyle />
      <ChangeStyle2 />
      <ToggleVisibility />
      <StudentList />
    </>
  );
}

export default App;
