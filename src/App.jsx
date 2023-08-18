import "./App.css";
import Card from "./component/Card/Card";
import ControlBar from "./component/ControlBar";
import TopicSets from "./component/Home/TopicSets";
import TopBar from "./component/TopBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./component/Home/Menu";

function App() {
  return (
    <div className="app">
      <Router>
        <TopBar></TopBar>
        <Menu />

        <Routes>
          <Route path="/">
            <Route index element={<TopicSets />} exact></Route>
            <Route path="card/:topicId/:id" element={<Card />}></Route>
          </Route>
        </Routes>
        <ControlBar></ControlBar>
      </Router>
    </div>
  );
}

export default App;
