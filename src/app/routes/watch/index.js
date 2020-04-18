import React, { useState } from "react";
import YouTube from "react-youtube";
import ContainerHeader from "components/ContainerHeader";
import { products, testimonials } from "./data";
import ProductCarousel from "./product/index";
import VideoPlayer from "./videoPlayer/index";
import TestimonialCarousel from "./testimonial/index";
import IntlMessages from "util/IntlMessages";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StarRatingComponent from "react-star-rating-component";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

function WatchVideo() {
  const [videoAdId, setVideoAdId] = useState();
  const [videoId, setVideoId] = useState();
  const [fullScreen, setFullScreen] = useState(false);
  const [count, setCount] = useState(0);
  const [videoList, setVideoList] = useState(["5DEdR5lqnDE", "RQ0FzwaqLow"]);

  return (
    <div className=" product-item-vertical hoverable animation flipInX">
      <div className="row d-flex align-items-sm-center">
        <div className="col-xl-8 col-lg-8 col-md-8 col-xs-12 col-12 columnHeight">
          <div className="card-header border-0 p-0">
            <div className="grid-thumb-equal">
              <VideoPlayer videoList={videoList} videoId={videoId} />
              <div>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="title" className="video-title">
                      Peppa Pig
                    </Typography>
                    <Typography variant="subtitle1">
                      This is a kids cartoon. famous one. not sure what to write
                      here...
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WatchVideo;
