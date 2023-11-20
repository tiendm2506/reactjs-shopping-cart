import React from "react";
import { Routes, Route } from "react-router-dom";

import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <Routes>
      <Route path="/" Component={ListPage} />
      <Route path="/todoId/:id" Component={DetailPage} />
    </Routes>
  );
}

export default TodoFeature;
