const ImageCarouselFactory = function() {
  const factory = {};
  factory.create = function(carouselId, breakpoints) {
    let currentIndex = 0;
    let itemsPerSlide;
    const carousel = $(carouselId);
    const carouselItems = $(carousel).find(".carousel-item");
    const totalItems = $(carouselItems).length;
    if (carousel.length < 1) {
      console.error(`Carousel with id ${carouselId} could not be found`);
      return null;
    }
    carousel.on("slide.bs.carousel", function(e) {
      const $e = $(e.relatedTarget);
      const idx = $e.index();
      itemsPerSlide = _getItemPerSlide(breakpoints);
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - idx);
        for (let i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(carouselItems)
              .eq(i)
              .appendTo($(carousel.find(".carousel-inner")));
          } else {
            $(carouselItems)
              .eq(0)
              .appendTo($(carousel.find(".carousel-inner")));
          }
        }
      }
    });

    // Previous Next Controls
    const prevBtn = $(carousel)
      .find(".carousel-previous")
      .on("click", function() {
        if (currentIndex === 0) {
        } else {
          $(carousel).carousel("prev");
          currentIndex = currentIndex - 1;
        }
      });
    const nextBtn = $(carousel)
      .find(".carousel-next")
      .on("click", function() {
        let itemsPerSlide = _getItemPerSlide(breakpoints);
        console.log("Items Per Slide:", itemsPerSlide, ":", currentIndex);
        if (currentIndex + itemsPerSlide === totalItems) {
        } else {
          $(carousel).carousel("next");
          currentIndex = currentIndex + 1;
        }
      });
    return carousel;
  };
  const _getItemPerSlide = function(breakpoints) {
    const large = 1200;
    const medium = 800;
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (viewportWidth >= large) {
      return breakpoints.large;
    } else if (viewportWidth >= medium) {
      return breakpoints.medium;
    } else {
      return breakpoints.small;
    }
  };
  return factory;
};

const factory = ImageCarouselFactory();
const carouselRecomended = factory.create("#carousel-recomended", {
  large: 4,
  medium: 2,
  small: 1
});
const carouselFeatured = factory.create("#carousel-featured", {
  large: 3,
  medium: 2,
  small: 1
});
$(".carousel").bcSwipe({ threshold: 50 });
