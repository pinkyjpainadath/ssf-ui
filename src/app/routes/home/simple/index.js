import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem
} from "reactstrap";

const items = [
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    src:
      "https://boygeniusreport.files.wordpress.com/2019/03/avengers-endgame-sign-2.jpg?quality=98&strip=all&w=1200"
  },
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    src:
      "https://boygeniusreport.files.wordpress.com/2019/03/avengers-endgame-sign-2.jpg?quality=98&strip=all&w=1200"
  },
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    src:
      "https://boygeniusreport.files.wordpress.com/2019/03/avengers-endgame-sign-2.jpg?quality=98&strip=all&w=1200"
  }
];

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.src} alt={item.altText} />

          <CarouselCaption
            className="text-danger"
            captionText={item.altText}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {`.carousel-item 
                img {
                
                    display: block;
            margin-left: auto;
            margin-right: auto;
            width: 1200px;
            height:450px;
                
          }`}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          id="caro"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Simple;
