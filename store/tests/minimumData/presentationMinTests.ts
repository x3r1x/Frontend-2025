import {
  addSlideToPresentation,
  changeSlidesOrder,
  deleteSlidesFromPresentation,
  renamePresentation,
} from "../../actions/presentationActions.js";
import { Presentation, Slide } from "../../types.js";

function testRenamePresentation(): "passed" | "failed" {
  const presentation: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const newName = "x3r1x";

  const expected: Presentation = {
    name: newName,
    slideCollection: [],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = renamePresentation(
    presentation,
    newName,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testAddSlideToPresentation(): "passed" | "failed" {
  const presentation: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const newSlide: Slide = {
    id: "num1",
    background: {
      color: "#000000",
      type: "Solid",
    },
    objects: [],
  };

  const expected: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [newSlide],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = addSlideToPresentation(
    presentation,
    newSlide,
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testDeleteSlidesFromPresentation(): "passed" | "failed" {
  const slideId = "num2";

  const slide: Slide = {
    id: slideId,
    background: {
      color: "#000000",
      type: "Solid",
    },
    objects: [],
  };

  const presentation: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [slide],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const expected: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = deleteSlidesFromPresentation(
    presentation,
    [slideId],
  );

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

function testChangeSlidesOrder(): "passed" | "failed" {
  const slideId1 = "num1";
  const slideId2 = "num2";

  const slide1: Slide = {
    id: slideId1,
    background: {
      color: "#000000",
      type: "Solid",
    },
    objects: [],
  };

  const slide2: Slide = {
    id: slideId2,
    background: {
      src: "no_src",
      type: "Image",
    },
    objects: [],
  };

  const presentation: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [slide1, slide2],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const expected: Presentation = {
    name: "MinimalPresentation",
    slideCollection: [slide2, slide1],
    selection: {
      selectedSlideIds: [],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = changeSlidesOrder(presentation, [
    slideId2,
    slideId1,
  ]);

  if (JSON.stringify(actionedEntity) === JSON.stringify(expected)) {
    return "passed";
  }
  return "failed";
}

export function testMinPresentationActions(): void {
  console.log('Minimal tests for type "Presentation":');
  console.log("   1. renamePresentation: " + testRenamePresentation() + "!");
  console.log(
    "   2. addSlideToPresentation: " + testAddSlideToPresentation() + "!",
  );
  console.log(
    "   3. deleteSlidesFromPresentation: " +
      testDeleteSlidesFromPresentation() +
      "!",
  );
  console.log("   4. changeSlidesOrder: " + testChangeSlidesOrder() + "!");
}
