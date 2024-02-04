import {assert} from "chai";
import { describe } from "mocha";
import {createCalculator} from "../7.addSubtract.js";

describe('createCalculator', () => {
    it('should return object', () => {
        assert.isObject(createCalculator());
    });

    it('should return object with add, subtract and get functions', () => {
        assert.containsAllKeys(createCalculator(), ['add', 'subtract', 'get']);
    });

    it('should return object with value 0', () => {
        assert.equal(createCalculator().get(), 0);
    });

    it('should return object with value 5', () => {
        let calc = createCalculator();
        calc.add(5);
        assert.equal(calc.get(), 5);
    });

    it('should return object with value -5', () => {
        let calc = createCalculator();
        calc.subtract(5);
        assert.equal(calc.get(), -5);
    });

    it('should return object with value 4.2', () => {
        let calc = createCalculator();
        calc.add(5.3);
        calc.subtract(1.1);
        assert.closeTo(calc.get(), 4.2, 0.01);
    });

    it('should return object with value 5', () => {
        let calc = createCalculator();
        calc.add('5');
        assert.equal(calc.get(), 5);
    });

    it('should return object with value -5', () => {
        let calc = createCalculator();
        calc.subtract('5');
        assert.equal(calc.get(), -5);
    });

    it('should return object with value 4.2', () => {
        let calc = createCalculator();
        calc.add('5.3');
        calc.subtract('1.1');
        assert.closeTo(calc.get(), 4.2, 0.01);
    });
    it('should return object with value NaN', () => {
        let calc = createCalculator();
        calc.add('pesho');
        assert.isNaN(calc.get());
    });
    
    it('should return object with value 0', () => {
        let calc = createCalculator();
        calc.value = 5;
        assert.equal(calc.get(), 0);
    });
    it('should return object with value 0', () => {
        let calc = createCalculator();
        calc.value = -5;
        assert.equal(calc.get(), 0);
    });
    it('should return object with value 0', () => {
        let calc = createCalculator();
        calc.value = 5.3;
        assert.equal(calc.get(), 0);
    });

});