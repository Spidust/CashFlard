import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopicItem(props) {
  return (
    <Link
      to={`/card/${props.topicId}/${props.cardId}`}
      className="topic-item hover-up"
    >
      <h2 className="topic-title">Bộ đề A</h2>
      <div className="play-btn">
        <FaPlay />
      </div>
    </Link>
  );
}

export default TopicItem;
