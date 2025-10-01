import { Presentation, Selection, Slide } from "../types.js"

function renamePresentation(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        name: newName
    }
}

function addSlideToPresentation(presentation: Presentation, slide: Slide): Presentation {
    return {
        ...presentation, 
        slideCollection: [...presentation.slideCollection, slide]
    }
}

function deleteSlidesFromPresentation(presentation: Presentation, slideIds: string[]): Presentation {
    const newSlideCollection: Slide[] = presentation.slideCollection.filter((slide: Slide) => !slideIds.includes(slide.id))

    const newSelection: Selection = {
        selectedSlideIds: [],
        selectedObjectIds: []
    }

    if (newSlideCollection.length !== 0) {
        newSelection.selectedSlideIds = [newSlideCollection[0]!.id]
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
        slideCollection: newOrderIds.reduce((newSlidesOrder: Slide[], id: string) => {
            const slide = presentation.slideCollection.find((slide: Slide) => slide.id === id)

            if (slide !== undefined) {
                newSlidesOrder.push(slide)
            }
            
            return newSlidesOrder
        }, [])
    }
}

export {
    renamePresentation,
    addSlideToPresentation,
    deleteSlidesFromPresentation,
    changeSlidesOrder
}