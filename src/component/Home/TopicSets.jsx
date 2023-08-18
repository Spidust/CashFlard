import React, { useState } from "react";
import TopicItem from "./TopicItem";
import "../../assets/css/Topic.css";
import SelectMenu from "../SelectMenu";

function TopicSets() {
  const [selecting, Select] = useState(0);

  return (
    <div className="topic-sets">
      <div className="topic-items">
        <TopicItem cardId="1" topicId={1} selectFunction={Select}></TopicItem>
      </div>
      {selecting && <SelectMenu quit={() => Select(0)} />}
    </div>
  );
}

export default TopicSets;
