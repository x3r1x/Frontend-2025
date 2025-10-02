import { Background, Presentation, Slide, SlideObject } from "../types.js";

function addObjectToSlide(
  presentation: Presentation,
  slideId: string,
  newObject: SlideObject,
): Presentation {
  return {
    ...presentation,
    slideCollection: presentation.slideCollection.map((slide: Slide) => {
      if (slide.id === slideId) {
        return {
          ...slide,
          objects: [...slide.objects, newObject],
        };
      }

      return slide;
    }),
  };
}

function deleteSelectedObjectsFromSlide(
  presentation: Presentation,
  slideId: string,
  objectIds: string[],
): Presentation {
  return {
    ...presentation,
    slideCollection: presentation.slideCollection.map((slide: Slide) => {
      if (slide.id === slideId) {
        return {
          ...slide,
          objects: slide.objects.filter(
            (object: SlideObject) => !objectIds.includes(object.id),
          ),
        };
      }

      return slide;
    }),
    selection: {
      ...presentation.selection,
      selectedObjectIds: [],
    },
  };
}

function changeSlideBackground(
  presentation: Presentation,
  slideId: string,
  newBackground: Background,
): Presentation {
  return {
    ...presentation,
    slideCollection: presentation.slideCollection.map((slide: Slide) => {
      if (slide.id === slideId) {
        return {
          ...slide,
          background: newBackground,
        };
      }

      return slide;
    }),
  };
}

export {
  addObjectToSlide,
  deleteSelectedObjectsFromSlide,
  changeSlideBackground,
};
