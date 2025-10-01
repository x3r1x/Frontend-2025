import { testMaxObjectActions } from "./maximumData/objectMaxTests.js";
import { testMaxPresentationActions } from "./maximumData/presentationMaxTests.js";
import { testMaxSelectionActions } from "./maximumData/selectionMaxTests.js";
import { testMaxSlideActions } from "./maximumData/slideMaxTests.js";
import { testMaxTextActions } from "./maximumData/textMaxTests.js";
import { testMinObjectActions } from "./minimumData/objectMinTests.js";
import { testMinPresentationActions } from "./minimumData/presentationMinTests.js";
import { testMinSelectionActions } from "./minimumData/selectionMinTests.js";
import { testMinSlideActions } from "./minimumData/slideMinTests.js";
import { testMinTextActions } from "./minimumData/textMinTests.js";

function startTests(): void {
    startMinTests()
    startMaxTests()
}

function startMinTests(): void {
    testMinPresentationActions()
    testMinSlideActions()
    testMinObjectActions()
    testMinTextActions()
    testMinSelectionActions()
}

function startMaxTests(): void {
    testMaxPresentationActions()
    testMaxSlideActions()
    testMaxObjectActions()
    testMaxTextActions()
    testMaxSelectionActions()
}

startTests()