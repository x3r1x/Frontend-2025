import { Presentation, Slide, SlideObject } from "../types.js";

function changeText(presentation: Presentation, slideId: string, textId: string, newText: string): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        objects: slide.objects.map((object: SlideObject) => {
                            if (object.id === textId && object.type === "Text") {
                                return {
                                    ...object,
                                    text: newText
                                }
                            }

                            return object
                        })
                    }
                }

                return slide
            })
        }
    }
}

function changeFontSize(presentation: Presentation, slideId: string, textId: string, newFontSize: number): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        objects: slide.objects.map((object: SlideObject) => {
                            if (object.id === textId && object.type === "Text") {
                                return {
                                    ...object,
                                    fontSize: newFontSize
                                }
                            }

                            return object
                        })
                    }
                }

                return slide
            })
        }
    }
}

function changeFontFamily(presentation: Presentation, slideId: string, textId: string, newFontFamily: string): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.map((slide: Slide) => {
                if (slide.id === slideId) {
                    return {
                        ...slide,
                        objects: slide.objects.map((object: SlideObject) => {
                            if (object.id === textId && object.type === "Text") {
                                return {
                                    ...object,
                                    fontFamily: newFontFamily
                                }
                            }

                            return object
                        })
                    }
                }

                return slide
            })
        }
    }
}