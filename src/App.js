import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";

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
        <Route path="/todos/*" Component={TodoFeature} />
        <Route path="/albums" Component={AlbumFeature} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
