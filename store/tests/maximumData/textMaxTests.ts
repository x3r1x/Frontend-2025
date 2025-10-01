import { changeFontFamily, changeFontSize, changeText } from "../../actions/textActions.js"
import { Presentation, Slide, TextObject } from "../../types.js"
import { presentation, slide1, slide2, slide2obj1, slide2Obj3, slide3, slide4, slide4background, slide4Id, slide4obj1, slide4obj2, slide4obj3Id, slide4obj4 } from "../maximumDataTestStorage.js"

function testChangeText(): "passed" | "failed" {
    const newSlide4obj3: TextObject = {
        id: slide4obj3Id,
        position: {
            x: 240,
            y: 410
        },
        size: {
            x: 80,
            y: 20
        },
        text: "Text has changed!",
        fontFamily: "Lora",
        fontSize: 10,
        color: "#FF52BA",
        type: "Text"
    }

    const newSlide4: Slide = {
        id: slide4Id,
        background: slide4background,
        objects: [slide4obj1, slide4obj2, newSlide4obj3, slide4obj4]
    }

    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, newSlide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
        }
    }

    const actionedEntity: Presentation = changeText(presentation, slide4Id, slide4obj3Id, "Text has changed!")

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testChangeFontSize(): "passed" | "failed" {
    const newSlide4obj3: TextObject = {
        id: slide4obj3Id,
        position: {
            x: 240,
            y: 410
        },
        size: {
            x: 80,
            y: 20
        },
        text: "z3r1x33r",
        fontFamily: "Lora",
        fontSize: 15,
        color: "#FF52BA",
        type: "Text"
    }

    const newSlide4: Slide = {
        id: slide4Id,
        background: slide4background,
        objects: [slide4obj1, slide4obj2, newSlide4obj3, slide4obj4]
    }

    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, newSlide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
        }
    }

    const actionedEntity: Presentation = changeFontSize(presentation, slide4Id, slide4obj3Id, 15)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }

    return "failed"
}

function testChangeFontFamily(): "passed" | "failed" {
    const newSlide4obj3: TextObject = {
        id: slide4obj3Id,
        position: {
            x: 240,
            y: 410
        },
        size: {
            x: 80,
            y: 20
        },
        text: "z3r1x33r",
        fontFamily: "Some new font",
        fontSize: 10,
        color: "#FF52BA",
        type: "Text"
    }

    const newSlide4: Slide = {
        id: slide4Id,
        background: slide4background,
        objects: [slide4obj1, slide4obj2, newSlide4obj3, slide4obj4]
    }

    const expected: Presentation = {
        name: "Maximum Presentation",
        slideCollection: [slide1, slide2, slide3, newSlide4],
        selection: {
            selectedSlideIds: [slide2.id, slide4.id, slide1.id],
            selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
        }
    }

    const actionedEntity: Presentation = changeFontFamily(presentation, slide4Id, slide4obj3Id, "Some new font")
    
    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }

    return "failed"
}

export function testMaxTextActions(): void {
    console.log('Maximal tests for type "Text":')
    console.log('   1. changeText: ' + testChangeText() + "!")
    console.log('   2. changeFontSize: ' + testChangeFontSize() + "!")
    console.log('   3. changeFontFamily: ' + testChangeFontFamily() + "!")
}