import React from 'react'

function Trailer({videoLink, videoTitle, videoDescription}) {
  return (
    <div>
      <h2>{videoTitle}</h2>
      <iframe
        width="560"
        height="315"
        src={videoLink}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{videoDescription}</p>
    </div>
  );
}

export default Trailer