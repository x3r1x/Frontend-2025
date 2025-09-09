import { Background, Presentation, Slide, SlideObject } from "../types.js";

function addObjectToSlide(presentation: Presentation, slideId: string, newObject: SlideObject): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        objects: [...slide.objects, newObject]
                    }
                }

                return slide
            })
        }
    }
}

function deleteObjectFromSlide(presentation: Presentation, slideId: string, objectId: string): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        objects: slide.objects.filter((object: SlideObject) => object.id !== objectId)
                    }
                }

                return slide
            })
        }
    }
}

function changeSlideBackground(presentation: Presentation, slideId: string, newBackground: Background): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        background: newBackground
                    }
                }

                return slide
            })
        }
    }
}