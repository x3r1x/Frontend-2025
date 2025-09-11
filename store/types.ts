export type Presentation = {
    name: string,
    slideCollection: Slide[],
    selection: Selection
}

export type Selection = {
    selectedSlideIds: string[],
    selectedObjectIds: string[]
}

export type Slide = {
    id: string,
    background: Background,
    objects: SlideObject[]
}

export type Background = SolidBackground | ImageBackground

type SolidBackground = {
    color: string,
    type: "Solid"
}

type ImageBackground = {
    src: string,
    type: "Image"
}

export type SlideObject = TextObject | ImageObject

export type Coordinates = {
    x: number,
    y: number
}

type BaseSlideObject = {
    id: string,
    position: Coordinates,
    size: Coordinates
}

type TextObject = BaseSlideObject & {
    text: string,
    fontFamily: string,
    fontSize: number,
    color: string,
    type: "Text"
}

type ImageObject = BaseSlideObject & {
    src: string,
    type: "Image"
}