import { assert } from "chai";
import {isSymmetric} from "../5.checkForSymmetry.js";
import { describe } from "mocha";

describe('isSymmetric', () => {
    it('should return false for non-array input', () => {
        assert.equal(isSymmetric('a'), false);
    });

    it('should return true for symmetric array', () => {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true);
    });

    it('should return false for non-symmetric array', () => {
        assert.equal(isSymmetric([1, 2, 3, 4, 2, 1]), false);
    });

    it('should return true for empty array', () => {
        assert.equal(isSymmetric([]), true);
    });

    it('should return true for one-element array', () => {
        assert.equal(isSymmetric([1]), true);
    });

    it('should return false for non-symmetric array with odd length', () => {
        assert.equal(isSymmetric([1, 2, 3, 4, 5]), false);
    });

    it('should return true for symmetric array with strings', () => {
        assert.equal(isSymmetric(['a', 'b', 'c', 'b', 'a']), true);
    });

    it('should return false for non-symmetric array with strings', () => {
        assert.equal(isSymmetric(['a', 'b', 'c', 'd', 'e']), false);
    });

    it('should return true for symmetric array with mixed types', () => {
        assert.equal(isSymmetric(['a', 1, {name: 'pesho'}, new Date(), {name: 'pesho'}, 1, 'a']), true);
    });

    it('should return false for non-symmetric array with mixed types', () => {
        assert.equal(isSymmetric(['a', 1, {name: 'pesho'}, new Date(), {name: 'gosho'}, 1, 'a']), false);
    });
});