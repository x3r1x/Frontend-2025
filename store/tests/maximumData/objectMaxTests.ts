import { changeObjectPosition, changeObjectSize } from "../../actions/objectActions.js"
import { Coordinates, Presentation, Slide, TextObject } from "../../types.js"
import { presentation, slide1, slide2, slide2Background, slide2Id, slide2obj1, slide2obj2id, slide2Obj3, slide3, slide4 } from "../maximumDataTestStorage.js"

function testChangeObjectPosition(): "passed" | "failed" {
    const newPosition: Coordinates = {
        x: 100,
        y: 100
    }

    const newSlide2Obj2: TextObject = {
        id: slide2obj2id,
        position: newPosition,
        size: {
            x: 100,
            y: 30
        },
        text: "Laragon!!!!",
        fontFamily: "Lora",
        fontSize: 15,
        color: "#4190FF",
        type: "Text"
    }

    const newSlide2: Slide = {
        id: slide2Id,
        background: slide2Background,
        objects: [slide2obj1, newSlide2Obj2, slide2Obj3]
    }

    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, newSlide2, slide3, slide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
        }
    }

    const actionedEntity: Presentation = changeObjectPosition(presentation, slide2Id, slide2obj2id, newPosition)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testChangeObjectSize(): "passed" | "failed" {
    const newSize: Coordinates = {
        x: 100,
        y: 100
    }

    const newSlide2Obj2: TextObject = {
        id: slide2obj2id,
        position: {
            x: 600,
            y: 489
        },
        size: newSize,
        text: "Laragon!!!!",
        fontFamily: "Lora",
        fontSize: 15,
        color: "#4190FF",
        type: "Text"
    }

    const newSlide2: Slide = {
        id: slide2Id,
        background: slide2Background,
        objects: [slide2obj1, newSlide2Obj2, slide2Obj3]
    }

    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, newSlide2, slide3, slide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
        }
    }

    const actionedEntity: Presentation = changeObjectSize(presentation, slide2Id, slide2obj2id, newSize)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

export function testMaxObjectActions(): void {
    console.log('Maximal tests for type "SlideObject":')
    console.log('   1. changeObjectPosition: ' + testChangeObjectPosition() + "!")
    console.log('   2. changeObjectSize: ' + testChangeObjectSize() + "!")
}