import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Routes>
        <Route path="/todos" Component={TodoFeature} />
        <Route path="/albums" Component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
