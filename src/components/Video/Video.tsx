"use client";

import YouTube from "react-youtube";
const Video = () => {
  return (
    <div className="w-full h-full relative">
      <div className="fixed w-full h-full bg-backdrop pointer-events-none"></div>
      <YouTube
        videoId={"AmC9SmCBUj4"}
        iframeClassName="w-full h-full fixed top-0 left-0 bottom-0 z-[-5]"
        opts={{
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            rel: 0,
            showinfo: 0,
            showsearch: 0,
            controls: 0,
            loop: 1,
            enablejsapi: 1,
            mute: 1,
            playlist: "AmC9SmCBUj4",
          },
        }}
      ></YouTube>
    </div>
  );
};

export default Video;
