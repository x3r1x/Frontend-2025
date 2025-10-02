import {
  addSlideToPresentation,
  changeSlidesOrder,
  deleteSlidesFromPresentation,
  renamePresentation,
} from "../../actions/presentationActions.js";
import { Presentation, Slide } from "../../types.js";
import {
  generateUUID,
  presentation,
  slide1,
  slide1Obj1,
  slide2,
  slide2obj1,
  slide2Obj3,
  slide3,
  slide4,
} from "../maximumDataTestStorage.js";

function testRenamePresentation(): "passed" | "failed" {
  const expected: Presentation = {
    name: "x3r1x",
    slideCollection: [slide1, slide2, slide3, slide4],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1.id],
      selectedObjectIds: [slide2Obj3.id, slide2obj1.id],
    },
  };

  const actionedEntity: Presentation = renamePresentation(
    presentation,
    "x3r1x",
  );

  if (JSON.stringify(expected) === JSON.stringify(actionedEntity)) {
    return "passed";
  }
  return "failed";
}

function testAddSlideToPresentation(): "passed" | "failed" {
  const newSlide: Slide = {
    id: generateUUID(),
    background: {
      color: "#F52C52",
      type: "Solid",
    },
    objects: [slide1Obj1, slide2Obj3, slide2Obj3],
  };

  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide1, slide2, slide3, slide4, newSlide],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1.id],
      selectedObjectIds: [slide2Obj3.id, slide2obj1.id],
    },
  };

  const actionedEntity: Presentation = addSlideToPresentation(
    presentation,
    newSlide,
  );

  if (JSON.stringify(expected) === JSON.stringify(actionedEntity)) {
    return "passed";
  }
  return "failed";
}

function testDeleteSlidesFromPresentation(): "passed" | "failed" {
  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide3],
    selection: {
      selectedSlideIds: [slide3.id],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = deleteSlidesFromPresentation(
    presentation,
    presentation.selection.selectedSlideIds,
  );

  if (JSON.stringify(expected) === JSON.stringify(actionedEntity)) {
    return "passed";
  }
  return "failed";
}

function testChangeSlidesOrder(): "passed" | "failed" {
  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide3, slide2, slide4, slide1],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1.id],
      selectedObjectIds: [slide2Obj3.id, slide2obj1.id],
    },
  };

  const actionedEntity: Presentation = changeSlidesOrder(presentation, [
    slide3.id,
    slide2.id,
    slide4.id,
    slide1.id,
  ]);

  if (JSON.stringify(expected) === JSON.stringify(actionedEntity)) {
    return "passed";
  }
  return "failed";
}

export function testMaxPresentationActions(): void {
  console.log('Maximal tests for type "Presentation":');
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
