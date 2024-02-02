import { assert } from "chai";
import lookupChar from "./03_Char_Lookup";

describe("lookupChar", () => {
    it("should return undefined", () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar("1", "1"));
        assert.isUndefined(lookupChar("1", 1.1));
        assert.isUndefined(lookupChar("1", 1.1));
        assert.isUndefined(lookupChar("1", "1"));
    });
    
    it("should return Incorrect index", () => {
        assert.equal(lookupChar("1", 1), "Incorrect index");
        assert.equal(lookupChar("1", -1), "Incorrect index");
        assert.equal(lookupChar("1", 1), "Incorrect index");
    });
    
    it("should return correct char", () => {
        assert.equal(lookupChar("1", 0), "1");
        assert.equal(lookupChar("123", 1), "2");
    });
    });