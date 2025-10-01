import { addObjectToSelection, addSlideToSelection, selectSlide } from "../../actions/selectionActions.js"
import { Presentation } from "../../types.js"

function testAddSlideToSelection(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedObjectIds: [],
            selectedSlideIds: []
        }
    }

    const expected: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedSlideIds: ["slide1"],
            selectedObjectIds: [],
        }
    }

    const actionedEntity: Presentation = addSlideToSelection(presentation, "slide1")
    
    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testSelectSlide(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedObjectIds: ["object1"],
            selectedSlideIds: ["slide1"]
        }
    }

    const expected: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedSlideIds: ["slide2"],
            selectedObjectIds: [],
        }
    }

    const actionedEntity: Presentation = selectSlide(presentation, "slide2")

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }

    return "failed"
}

function testAddObjectToSelection(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedObjectIds: [],
            selectedSlideIds: ["slide1"]
        }
    }

    const expected: Presentation = {
        name: "x3r1x",
        slideCollection: [],
        selection: {
            selectedSlideIds: ["slide1"],
            selectedObjectIds: ["object1"],
        }
    }
    
    const actionedEntity: Presentation = addObjectToSelection(presentation, "object1")

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

export function testMinSelectionActions(): void {
    console.log('Minimal tests for type "Selection":')
    console.log('   1. addSlideToSelection: ' + testAddSlideToSelection() + "!")
    console.log('   2. selectSlide: ' + testSelectSlide() + "!")
    console.log('   3. addObjectToSelection: ' + testAddObjectToSelection() + "!")
}