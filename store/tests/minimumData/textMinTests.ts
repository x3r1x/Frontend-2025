import { changeFontFamily, changeFontSize, changeText } from "../../actions/textActions.js"
import { Presentation } from "../../types.js"

function testChangeText(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Hello!",
                fontFamily: "Lora",
                fontSize: 34,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }
    
    const expected: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Text has changed",
                fontFamily: "Lora",
                fontSize: 34,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }

    const actionedEntity: Presentation = changeText(presentation, "sdf1", "object1", "Text has changed")

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testChangeFontSize(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Hello!",
                fontFamily: "Lora",
                fontSize: 34,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }

    const expected: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Hello!",
                fontFamily: "Lora",
                fontSize: 20,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }

    const actionedEntity: Presentation = changeFontSize(presentation, "sdf1", "object1", 20)

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

function testChangeFontFamily(): "passed" | "failed" {
    const presentation: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Hello!",
                fontFamily: "Lora",
                fontSize: 34,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }

    const expected: Presentation = {
        name: "Hi!",
        slideCollection: [{
            id: "sdf1",
            background: {
                color: "#000000",
                type: "Solid"
            },
            objects: [{
                id: "object1",
                position: {
                    x: 350,
                    y: 200
                },
                size: {
                    x: 100,
                    y: 80
                },
                text: "Hello!",
                fontFamily: "Times New Roman",
                fontSize: 34,
                color: "#4AB546",
                type: "Text"
            }]
        }], 
        selection: {
            selectedSlideIds: [],
            selectedObjectIds: []
        }
    }

    const actionedEntity: Presentation = changeFontFamily(presentation, "sdf1", "object1", "Times New Roman")

    if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
        return "passed"
    }
    return "failed"
}

export function testMinTextActions(): void {
    console.log('Minimal tests for type "Text":')
    console.log('   1. changeText: ' + testChangeText() + "!")
    console.log('   2. changeFontSize: ' + testChangeFontSize() + "!")
    console.log('   3. changeFontFamily: ' + testChangeFontFamily() + "!")
}