import { ImageBackground, ImageObject, Presentation, Slide, SolidBackground, TextObject } from "../types.js";

function generateUUID(): string {
    return crypto.randomUUID()
}

const slide1Background: SolidBackground = {
    color: "#3451FC",
    type: "Solid"
}

const slide1Obj1: TextObject = {
    id: generateUUID(),
    position: {
        x: 18,
        y: 200
    },
    size: {
        x: 200,
        y: 150
    },
    text: "Slide 1",
    fontFamily: "Arial",
    fontSize: 20,
    color: "#000000",
    type: "Text"
}

const slide1Obj2: ImageObject = {
    id: generateUUID(),
    position: {
        x: 520,
        y: 400
    },
    size: {
        x: 23,
        y: 23
    },
    src: "../../../assets/1.png",
    type: "Image"
}

const slide1Obj3: ImageObject = {
    id: generateUUID(),
    position: {
        x: 540,
        y: 410
    },
    size: {
        x: 150,
        y: 200
    },
    src: "../../../assets/2.png",
    type: "Image"
}

const slide1Obj4: TextObject = {
    id: generateUUID(),
    position: {
        x: 300,
        y: 48
    },
    size: {
        x: 100,
        y: 50
    },
    text: "Some letters",
    fontFamily: "Times New Roman",
    fontSize: 12,
    color: "#FFFF31",
    type: "Text"
}

const slide1Id: string = generateUUID()

const slide1: Slide = {
    id: slide1Id,
    background: slide1Background,
    objects: [slide1Obj1, slide1Obj2, slide1Obj3, slide1Obj4]
}

const slide2Background: SolidBackground = {
    color: "#3451FC",
    type: "Solid"
}

const slide2obj1: TextObject = {
    id: generateUUID(),
    position: {
        x: 150,
        y: 400
    },
    size: {
        x: 80,
        y: 20
    },
    text: "Lorem ipsum",
    fontFamily: "Lora",
    fontSize: 10,
    color: "#34CA82",
    type: "Text"
}

const slide2obj2id = generateUUID()

const slide2obj2: TextObject = {
    id: slide2obj2id,
    position: {
        x: 600,
        y: 489
    },
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

const slide2Obj3: ImageObject = {
    id: generateUUID(),
    position: {
        x: 300,
        y: 100
    },
    size: {
        x: 150,
        y: 340
    },
    src: "../../../assets/3.png",
    type: "Image"
}

const slide2Id: string = generateUUID()

const slide2: Slide = {
    id: slide2Id,
    background: slide2Background,
    objects: [slide2obj1, slide2obj2, slide2Obj3]
}

const slide3background: ImageBackground = {
    src: "../../../assets/4.png",
    type: "Image"
}

const slide3Obj1: ImageObject = {
    id: generateUUID(),
    position: {
        x: 0,
        y: 100
    },
    size: {
        x: 150,
        y: 340
    },
    src: "../../../assets/4.png",
    type: "Image"
}

const slide3Obj2: ImageObject = {
    id: generateUUID(),
    position: {
        x: 20,
        y: 120
    },
    size: {
        x: 150,
        y: 340
    },
    src: "../../../assets/5.png",
    type: "Image"
}

const slide3Obj3: ImageObject = {
    id: generateUUID(),
    position: {
        x: 40,
        y: 140
    },
    size: {
        x: 150,
        y: 340
    },
    src: "../../../assets/6.png",
    type: "Image"
}

const slide3Obj4: ImageObject = {
    id: generateUUID(),
    position: {
        x: 60,
        y: 180
    },
    size: {
        x: 150,
        y: 340
    },
    src: "../../../assets/7.png",
    type: "Image"
}

const slide3Id: string = generateUUID()

const slide3: Slide = {
    id: slide3Id,
    background: slide3background,
    objects: [slide3Obj1, slide3Obj2, slide3Obj3, slide3Obj4]
}

const slide4background: ImageBackground = {
    src: "../../../assets/7.png",
    type: "Image"
}

const slide4obj1: TextObject = {
    id: generateUUID(),
    position: {
        x: 200,
        y: 400
    },
    size: {
        x: 80,
        y: 20
    },
    text: "x3r1x",
    fontFamily: "Times New Roman",
    fontSize: 10,
    color: "#34CA82",
    type: "Text"
}

const slide4obj2: TextObject = {
    id: generateUUID(),
    position: {
        x: 220,
        y: 405
    },
    size: {
        x: 80,
        y: 20
    },
    text: "3333r1x",
    fontFamily: "Sans Serif",
    fontSize: 10,
    color: "#F42C41",
    type: "Text"
}

const slide4obj3Id: string = generateUUID()

const slide4obj3: TextObject = {
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
    fontSize: 10,
    color: "#FF52BA",
    type: "Text"
}

const slide4obj4: TextObject = {
    id: generateUUID(),
    position: {
        x: 260,
        y: 415
    },
    size: {
        x: 80,
        y: 20
    },
    text: "z0r1x3r",
    fontFamily: "Arial",
    fontSize: 10,
    color: "#CCCC23",
    type: "Text"
}

const slide4Id: string = generateUUID()

const slide4: Slide = {
    id: slide4Id,
    background: slide4background,
    objects: [slide4obj1, slide4obj2, slide4obj3, slide4obj4]
}

const presentation: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide1, slide2, slide3, slide4],
    selection: {
        selectedSlideIds: [slide2.id, slide4.id, slide1.id],
        selectedObjectIds: [slide2Obj3.id, slide2obj1.id]
    }
}

export {
    generateUUID,
    presentation,
    slide1, 
    slide2,
    slide3,
    slide4,
    slide1Obj1,
    slide1Obj2,
    slide1Obj3,
    slide1Obj4,
    slide2Obj3,
    slide2obj2,
    slide2obj1,
    slide3Obj1,
    slide3Obj2,
    slide3Obj3,
    slide3Obj4,
    slide4obj1,
    slide4obj2,
    slide4obj3,
    slide4obj4,
    slide1Id,
    slide1Background,
    slide2Id,
    slide2Background,
    slide3Id,
    slide4background,
    slide2obj2id,
    slide4Id,
    slide4obj3Id
}