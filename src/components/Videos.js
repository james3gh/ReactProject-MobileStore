import React from "react";
import "../styles/Videos.css";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <VideoCard
          name={item.name}
          image={item.image}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default Videos;
