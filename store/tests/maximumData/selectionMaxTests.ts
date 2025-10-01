import { addObjectToSelection, addSlideToSelection, selectSlide } from "../../actions/selectionActions.js"
import { Presentation } from "../../types.js"
import { slide1, slide2, slide3, slide4, slide2Obj3, slide2obj1, presentation, slide3Id, slide2obj2id } from "../maximumDataTestStorage.js"

function testAddSlideToSelection(): "passed" | "failed" {
    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, slide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id, slide3Id],
            selectedObjectIds: []
        }
    }

    const actionedEntity: Presentation = addSlideToSelection(presentation, slide3Id)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testSelectSlide(): "passed" | "failed" {
    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, slide4],
        selection: {
            selectedSlideIds: [slide3Id],
            selectedObjectIds: []
        }
    }

    const actionedEntity: Presentation = selectSlide(presentation, slide3Id)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }

    return "failed"
}

function testAddObjectToSelection(): "passed" | "failed" {
    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, slide4],
        selection: {
            selectedSlideIds: [slide2.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id, slide2obj2id]
        }
    }

    const actionedEntity: Presentation = addObjectToSelection(presentation, slide2obj2id)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }

    return "failed"
}

export function testMaxSelectionActions(): void {
    console.log('Maximal tests for type "Selection":')
    console.log('   1. addSlideToSelection: ' + testAddSlideToSelection() + "!")
    console.log('   2. selectSlide: ' + testSelectSlide() + "!")
    console.log('   3. addObjectToSelection: ' + testAddObjectToSelection() + "!")
}