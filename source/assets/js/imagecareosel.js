const ImageCarouselFactory = function() {
  const factory = {};
  factory.create = function(carouselId, itemsPerSlide) {
    let currentIndex = 0;
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
          alert("Can not get back more..");
        } else {
          $(carousel).carousel("prev");
          currentIndex = currentIndex - 1;
        }
      });
    const nextBtn = $(carousel)
      .find(".carousel-next")
      .on("click", function() {
        console.log("Total Item", totalItems);
        if (currentIndex + itemsPerSlide === totalItems) {
          alert("Can not go more");
        } else {
          $(carousel).carousel("next");
          currentIndex = currentIndex + 1;
        }
      });
    return carousel;
  };
  return factory;
};

const factory = ImageCarouselFactory();
const carouselRecomended = factory.create("#carousel-recomended", 4);
const carouselFeatured = factory.create("#carousel-featured", 3);
