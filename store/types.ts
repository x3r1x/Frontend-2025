export interface Presentation {
  name: string;
  slideCollection: Slide[];
  selection: Selection;
}

export interface Selection {
  selectedSlideIds: string[];
  selectedObjectIds: string[];
}

export interface Slide {
  id: string;
  background: Background;
  objects: SlideObject[];
}

export type Background = SolidBackground | ImageBackground;

export interface SolidBackground {
  color: string;
  type: "Solid";
}

export interface ImageBackground {
  src: string;
  type: "Image";
}

export type SlideObject = TextObject | ImageObject;

export interface Coordinates {
  x: number;
  y: number;
}

interface BaseSlideObject {
  id: string;
  position: Coordinates;
  size: Coordinates;
}

export type TextObject = BaseSlideObject & {
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  type: "Text";
};

export type ImageObject = BaseSlideObject & {
  src: string;
  type: "Image";
};
