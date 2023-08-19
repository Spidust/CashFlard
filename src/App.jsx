import "./App.css";
import Card from "./component/Card/Card";
import ControlBar from "./component/ControlBar";
import TopicSets from "./component/Home/TopicSets";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="app">
      <Router>
        <TopBar></TopBar>
        {active && <Menu quit={() => setActive(false)} />}

        <Routes>
          <Route path="/">
            <Route index element={<TopicSets />} exact></Route>
            <Route path="card/:topicId/:id" element={<Card />}></Route>
          </Route>
        </Routes>
        <ControlBar openMenu={() => setActive(true)}></ControlBar>
      </Router>
    </div>
  );
}

export default App;
