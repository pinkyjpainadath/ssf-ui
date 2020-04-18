import React, { useState } from "react";
import YouTube from "react-youtube";
import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Fullscreen from "react-full-screen";

function VideoPlayer(props) {
  const [player, setPlayer] = useState(null);
  const [showImg, setShowImg] = useState(true);
  const [isFull, setIsFull] = useState(false);

  const [videoId, setVideoId] = useState();
  const { videoList } = props;
  const [fullScreen, setFullScreen] = useState(false);
  const [count, setCount] = useState(0);

  if (document.addEventListener) {
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
  }

  function exitHandler() {
    var elem = document.getElementById("videoContainer");

    // if (!document.fullscreenElement) {
    //   elem.requestFullscreen().catch((err) => {
    //     alert(
    //       `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    //     );
    //   });
    // } else {
    //   document.exitFullscreen();
    // }

    if (elem != undefined) {
      if (elem.fullscreenElement) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }
    if (
      (document.webkitIsFullScreen != undefined &&
        document.webkitIsFullScreen) ||
      (document.mozFullScreen != undefined && document.mozFullScreen) ||
      (document.msFullscreenElement != undefined &&
        document.msFullscreenElement !== null)
    ) {
      document.getElementById("videoContainer").className =
        "fullscreen-video-fluid";
    } else {
      setFullScreen(false);
      setIsFull(false);
      document.getElementById("videoContainer").className = "video-fluid";
      //document.getElementById("videoAdsContainer").style.height = "70%";
    }
  }

  const optsVideo1 = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      autoplay: 1,
      allowFullscreen: 1,
    },
  };

  const optsVideo2 = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 1,
      autoplay: 1,
      allowFullscreen: 1,
      //Mute this in safari to enable autoplay
      // mute: 1,
    },
  };
  const [opts, setOpts] = useState();

  const onFullScreen = (event) => {
    setIsFull(true);
    var elem = document.getElementById("videoContainer").parentElement;
    document.getElementById("videoContainer").className =
      "fullscreen-video-fluid";

    if (elem != undefined) {
      if (elem.fullscreenElement) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }
    event.preventDefault();
  };

  const onReady = (event) => {
    setPlayer(event.target);
    if (isFull) {
      document.getElementById("videoContainer").className =
        "fullscreen-video-fluid";
    } else {
      document.getElementById("videoContainer").className = "video-fluid";
    }
    document.getElementById("videoContainer").allow = "autoplay";
    if (count == 0) {
      event.target.pauseVideo();

      setOpts(optsVideo1);
    }
  };

  const onEnd = (event) => {
    if (isFull) {
      document.getElementById("videoContainer").className =
        "fullscreen-video-fluid";
    } else {
      document.getElementById("videoContainer").className = "video-fluid";
    }
    if (count <= videoList.length - 1) {
      setCount(count + 1);
      setVideoId(videoList[count + 1]);
      setOpts(optsVideo2);
      player.playVideo();
    } else {
    }
    console.log("on end");
  };

  const handleBannerClick = (event) => {
    console.log("inside click");
    setShowImg(false);
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    //document.getElementById("imgContainer").style.display = "none";
    setVideoId(videoList[count]);
    setFullScreen(true);
    if (isFull) {
      document.getElementById("videoContainer").className =
        "fullscreen-video-fluid";
    } else {
      document.getElementById("videoContainer").className = "video-fluid";
    }
    player.playVideo();
  };

  return (
    <div>
      <div>
        <YouTube
          id="videoContainer"
          videoId={videoId}
          onReady={onReady}
          onEnd={onEnd}
          className="video-fluid"
          // containerClassName="grid-thumb-cover jr-link"
          opts={opts}
          allow="autoplay"
        />
        {fullScreen && (
          <IconButton
            aria-label="fullscreen"
            className="full-screen"
            onClick={onFullScreen}
          >
            <FullscreenIcon onClick={onFullScreen} />
          </IconButton>
        )}
      </div>

      {showImg && (
        <div class="grid-thumb-cover jr-link" id="imgContainer">
          <img
            src="https://cdn.iview.abc.net.au/thumbs/1200/zw/ZW0924A_5e092235d2c18_1280.jpg"
            className="img-fluid"
          ></img>
          <Button onClick={handleBannerClick} color="secondary">
            Play
          </Button>
        </div>
      )}
    </div>
  );
}
export default VideoPlayer;
