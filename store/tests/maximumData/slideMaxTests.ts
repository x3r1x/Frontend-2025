import {
  addObjectToSlide,
  changeSlideBackground,
  deleteSelectedObjectsFromSlide,
} from "../../actions/slideActions.js";
import { Presentation, Slide } from "../../types.js";
import {
  presentation,
  slide1,
  slide1Background,
  slide1Id,
  slide1Obj1,
  slide1Obj2,
  slide1Obj3,
  slide1Obj4,
  slide2,
  slide2Background,
  slide2Id,
  slide2obj1,
  slide2obj2,
  slide2Obj3,
  slide3,
  slide3Id,
  slide3Obj1,
  slide3Obj2,
  slide3Obj3,
  slide3Obj4,
  slide4,
  slide4background,
} from "../maximumDataTestStorage.js";

function testAddObjectToSlide(): "passed" | "failed" | string {
  const newSlide1: Slide = {
    id: slide1Id,
    background: slide1Background,
    objects: [slide1Obj1, slide1Obj2, slide1Obj3, slide1Obj4, slide2Obj3],
  };

  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [newSlide1, slide2, slide3, slide4],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1Id],
      selectedObjectIds: [slide2Obj3.id, slide2obj1.id],
    },
  };

  const actionedEntity: Presentation = addObjectToSlide(
    presentation,
    slide1Id,
    slide2Obj3,
  );

  if (
    JSON.stringify(expected.selection) ===
    JSON.stringify(actionedEntity.selection)
  ) {
    return "passed";
  }
  return "failed";
}

function testDeleteSelectedObjectsFromSlide(): "passed" | "failed" {
  const newSlide2: Slide = {
    id: slide2Id,
    background: slide2Background,
    objects: [slide2obj2],
  };

  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide1, newSlide2, slide3, slide4],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1Id],
      selectedObjectIds: [],
    },
  };

  const actionedEntity: Presentation = deleteSelectedObjectsFromSlide(
    presentation,
    slide2Id,
    presentation.selection.selectedObjectIds,
  );

  if (
    JSON.stringify(expected.selection) ===
    JSON.stringify(actionedEntity.selection)
  ) {
    return "passed";
  }
  return "failed";
}

function testChangeSlideBackground(): "passed" | "failed" {
  const newSlide3: Slide = {
    id: slide3Id,
    background: slide4background,
    objects: [slide3Obj1, slide3Obj2, slide3Obj3, slide3Obj4],
  };

  const expected: Presentation = {
    name: "Maximum Presentation",
    slideCollection: [slide1, slide2, newSlide3, slide4],
    selection: {
      selectedSlideIds: [slide2.id, slide4.id, slide1Id],
      selectedObjectIds: [slide2Obj3.id, slide2obj1.id],
    },
  };

  const actionedEntity: Presentation = changeSlideBackground(
    presentation,
    slide3Id,
    slide4background,
  );

  if (
    JSON.stringify(expected.selection) ===
    JSON.stringify(actionedEntity.selection)
  ) {
    return "passed";
  }
  return "failed";
}

export function testMaxSlideActions(): void {
  console.log('Maximal tests for type "Slide":');
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
