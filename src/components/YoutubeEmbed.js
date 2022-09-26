import React from "react";
import PropTypes from "prop-types";
import video from '../assets/videos/video.mp4';

const YoutubeEmbed = ({  }) => (
  <div className="video-responsive">
    <iframe
      width="1100"
      height="480"
      src={video}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Gascosmos Video Promotion"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;