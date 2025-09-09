import { Presentation, Slide, SlideCollection } from "../types.js"

function renamePresentation(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        name: newName
    }
}

function addSlideToPresentation(presentation: Presentation, slide: Slide): Presentation {
    return {
        ...presentation, 
        slideCollection: {
            collection: [...presentation.slideCollection.collection, slide]
        }
    }
}

function deleteSlideFromPresentation(presentation: Presentation, slideId: string): Presentation {
    return {
        ...presentation,
        slideCollection: {
            collection: presentation.slideCollection.collection.filter((slide: Slide) => slide.id !== slideId)
        }
    }
}

function changeSlidesOrder(presentation: Presentation, newOrderIds: string[]): Presentation {
    return {
        ...presentation,
        slideCollection: newOrderIds.reduce((newSlidesOrder: SlideCollection, id: string) => {
            const slide = presentation.slideCollection.collection.find((slide: Slide) => slide.id === id)

            if (slide !== undefined) {
                newSlidesOrder.collection.push(slide)
            }
            
            return newSlidesOrder
        }, {collection: []})
    }
}