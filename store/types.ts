export type Presentation = {
    name: string,
    slideCollection: SlideCollection,
    selection: Selection
}

export type SlideCollection = {
    collection: Slide[]
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

type DefaultObject = {
    id: string,
    position: Coordinates,
    size: Coordinates
}

type TextObject = DefaultObject & {
    text: string,
    fontFamily: string,
    fontSize: number,
    color: string,
    type: "Text"
}

type ImageObject = DefaultObject & {
    src: string,
    type: "Image"
}