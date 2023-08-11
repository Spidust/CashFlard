import React from "react";
import TopicItem from "./TopicItem";
import "../../assets/css/Topic.css";

function TopicSets() {
  return (
    <div className="topic-sets">
      <div className="topic-items">
        <TopicItem cardId="1" topicId="1"></TopicItem>
      </div>
    </div>
  );
}

export default TopicSets;
