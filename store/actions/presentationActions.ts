import { Presentation, Selection, Slide, SlideCollection } from "../types.js"

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

function deleteSlidesFromPresentation(presentation: Presentation, slideIds: string): Presentation {
    const newSlideCollection: SlideCollection = {
        collection: presentation.slideCollection.collection.filter((slide: Slide) => !slideIds.includes(slide.id))
    }

    const newSelection: Selection = {
        selectedSlideIds: [],
        selectedObjectIds: []
    }

    if (newSlideCollection.collection.length !== 0) {
        newSelection.selectedSlideIds = [newSlideCollection.collection[0]!!.id]
    }

    return {
        ...presentation,
        slideCollection: newSlideCollection,
        selection: newSelection
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