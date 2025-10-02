import {
  changeObjectPosition,
  changeObjectSize,
} from "../../actions/objectActions.js";
import { Coordinates, Presentation } from "../../types.js";

function testChangeObjectPosition(): "passed" | "failed" {
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
      selectedObjectIds: [],
    },
  };

  const newPosition: Coordinates = {
    x: 50,
    y: 50,
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
              x: 50,
              y: 50,
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

  const actionedEntity: Presentation = changeObjectPosition(
    presentation,
    "sdf1",
    "object1",
    newPosition,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testChangeObjectSize(): "passed" | "failed" {
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
      selectedObjectIds: [],
    },
  };

  const newSize: Coordinates = {
    x: 180,
    y: 150,
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
              x: 180,
              y: 150,
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

  const actionedEntity: Presentation = changeObjectSize(
    presentation,
    "sdf1",
    "object1",
    newSize,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

export function testMinObjectActions(): void {
  console.log('Minimal tests for type "SlideObject":');
  console.log(
    "   1. changeObjectPosition: " + testChangeObjectPosition() + "!",
  );
  console.log("   2. changeObjectSize: " + testChangeObjectSize() + "!");
}
