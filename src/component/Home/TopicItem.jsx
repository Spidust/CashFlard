import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopicItem(props) {
  return (
    <div
      className="topic-item hover-up"
      onClick={() => props.selectFunction(props.topicId)}
    >
      <h2 className="topic-title">Bộ đề A</h2>
      <div className="play-btn">
        <FaPlay />
      </div>
    </div>
  );
}

export default TopicItem;
