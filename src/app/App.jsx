import React, { useState } from "react";
import { Main } from "../pages/Main";
import { Favorite } from "../pages/Favorite";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
export const MyContext = React.createContext();

const App = () => {
  const [favoriteCats, setFavoriteCats] = useState([]);
  return (
    <MyContext.Provider value={{ favoriteCats, setFavoriteCats }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
};

export default App;
