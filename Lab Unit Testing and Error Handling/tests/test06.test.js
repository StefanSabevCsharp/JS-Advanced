import { describe } from "mocha";
import { assert } from "chai";
import { rgbToHexColor } from "../6.rgbToHex.js";

describe('rgbToHexColor', () => {
    it('should return undefined for invalid red', () => {
        assert.equal(rgbToHexColor(-1, 0, 0), undefined);
    });

    it('should return undefined for invalid green', () => {
        assert.equal(rgbToHexColor(0, -1, 0), undefined);
    });

    it('should return undefined for invalid blue', () => {
        assert.equal(rgbToHexColor(0, 0, -1), undefined);
    });

    it('should return undefined for invalid red', () => {
        assert.equal(rgbToHexColor(256, 0, 0), undefined);
    });

    it('should return undefined for invalid green', () => {
        assert.equal(rgbToHexColor(0, 256, 0), undefined);
    });

    it('should return undefined for invalid blue', () => {
        assert.equal(rgbToHexColor(0, 0, 256), undefined);
    });

    it('should return #FF9EAA for (255, 158, 170)', () => {
        assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
    });

    it('should return #0C0D0E for (12, 13, 14)', () => {
        assert.equal(rgbToHexColor(12, 13, 14), '#0C0D0E');
    });

    it('should return #000000 for (0, 0, 0)', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });

    it('should return #FFFFFF for (255, 255, 255)', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
});