import {
  addObjectToSlide,
  changeSlideBackground,
  deleteSelectedObjectsFromSlide,
} from "../../actions/slideActions.js";
import { ImageBackground, Presentation, SlideObject } from "../../types.js";

function testAddObjectToSlide(): "passed" | "failed" {
  const presentation: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          color: "#000000",
          type: "Solid",
        },
        objects: [],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const newObject: SlideObject = {
    id: "object1",
    position: {
      x: 350,
      y: 200,
    },
    size: {
      x: 100,
      y: 80,
    },
    src: "some src",
    type: "Image",
  };

  const expected: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          color: "#000000",
          type: "Solid",
        },
        objects: [
          {
            id: "object1",
            position: {
              x: 350,
              y: 200,
            },
            size: {
              x: 100,
              y: 80,
            },
            src: "some src",
            type: "Image",
          },
        ],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = addObjectToSlide(
    presentation,
    "sdf1",
    newObject,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testDeleteSelectedObjectsFromSlide(): "passed" | "failed" {
  const presentation: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          color: "#000000",
          type: "Solid",
        },
        objects: [
          {
            id: "object1",
            position: {
              x: 350,
              y: 200,
            },
            size: {
              x: 100,
              y: 80,
            },
            src: "some src",
            type: "Image",
          },
        ],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: ["object1"],
    },
  };

  const expected: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          color: "#000000",
          type: "Solid",
        },
        objects: [],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = deleteSelectedObjectsFromSlide(
    presentation,
    "sdf1",
    ["object1"],
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testChangeSlideBackground(): "passed" | "failed" {
  const presentation: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          color: "#000000",
          type: "Solid",
        },
        objects: [],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const newBackground: ImageBackground = {
    src: "some src",
    type: "Image",
  };

  const expected: Presentation = {
    name: "Hi!",
    slideCollection: [
      {
        id: "sdf1",
        background: {
          src: "some src",
          type: "Image",
        },
        objects: [],
      },
    ],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = changeSlideBackground(
    presentation,
    "sdf1",
    newBackground,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

export function testMinSlideActions(): void {
  console.log('Minimal tests for type "Slide":');
  console.log("   1. addObjectToSlide: " + testAddObjectToSlide() + "!");
  console.log(
    "   2. deleteSelectedObjectsFromSlide: " +
      testDeleteSelectedObjectsFromSlide() +
      "!",
  );
  console.log(
    "   3. changeSlideBackground: " + testChangeSlideBackground() + "!",
  );
}
