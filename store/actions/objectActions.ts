import { Coordinates, Presentation, Slide, SlideObject } from "../types.js";

function changeObjectPosition(
  presentation: Presentation,
  slideId: string,
  objectId: string,
  newPosition: Coordinates,
): Presentation {
  return {
    ...presentation,
    slideCollection: presentation.slideCollection.map((slide: Slide) => {
      if (slide.id === slideId) {
        return {
          ...slide,
          objects: slide.objects.map((object: SlideObject) => {
            if (object.id === objectId) {
              return {
                ...object,
                position: newPosition,
              };
            }

            return object;
          }),
        };
      }

      return slide;
    }),
  };
}

function changeObjectSize(
  presentation: Presentation,
  slideId: string,
  objectId: string,
  newSize: Coordinates,
): Presentation {
  return {
    ...presentation,
    slideCollection: presentation.slideCollection.map((slide: Slide) => {
      if (slide.id === slideId) {
        return {
          ...slide,
          objects: slide.objects.map((object: SlideObject) => {
            if (object.id === objectId) {
              return {
                ...object,
                size: newSize,
              };
            }

            return object;
          }),
        };
      }

      return slide;
    }),
  };
}

export { changeObjectPosition, changeObjectSize };
