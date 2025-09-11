import { Presentation } from "../types.js";

function addSlideToSelection(presentation: Presentation, slideId: string): Presentation {
    return {
        ...presentation,
        selection: {
            selectedSlideIds: [...presentation.selection.selectedSlideIds, slideId],
            selectedObjectIds: []
        }
    }
}

function selectSlide(presentation: Presentation, slideId: string): Presentation {
    return {
        ...presentation,
        selection: {
            selectedSlideIds: [slideId],
            selectedObjectIds: []
        }
    }
}

function addObjectToSelection(presentation: Presentation, objectId: string): Presentation {
    return {
        ...presentation,
        selection: {
            selectedSlideIds: [presentation.selection.selectedSlideIds[0]!!],
            selectedObjectIds: [...presentation.selection.selectedObjectIds, objectId]
        }
    }
}