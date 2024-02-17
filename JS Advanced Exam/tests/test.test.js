import {expect} from 'chai';
import {planYourTrip} from "../planYourTrip.js";

describe('test', () => {
    it('should return a string', () => {
        expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.be.a('string');
    });
    it('should return a string', () => {
        expect(planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 1)).to.be.a('string');
    });
    it('should return a string', () => {
        expect(planYourTrip.estimateExpenses(100, 5)).to.be.a('string');
    });
   
    it('should throw an error', () => {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 3)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(-100, 5)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses("100", 5)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(100, "5")).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.exploreOptions("skiing", 1)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], "1")).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(0, -5)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(-100, 0)).to.throw();
    });
    it('should throw an error', () => {
        expect(() => planYourTrip.estimateExpenses(-100, -5)).to.throw();
    });
    it("happy path", function () {
        expect(planYourTrip.estimateExpenses(100, 5)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
    });
    it("happy path", function () {
        expect(planYourTrip.estimateExpenses(101, 5)).to.equal("The estimated cost for the trip is $505.00, plan accordingly.");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses("100", 5)).to.throw("Invalid Information!");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses(100, "5")).to.throw("Invalid Information!");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses(-100, 5)).to.throw("Invalid Information!");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses(100, -5)).to.throw("Invalid Information!");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw("Invalid Information!");
    });
    it("happy path", function () {
        expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw("Invalid Information!");
    });
    it("second digit after the decimal point", function () {
        expect(planYourTrip.estimateExpenses(100, 5)).to.equal("The trip is budget-friendly, estimated cost is $500.00.");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], "1")).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions("skiing", 1)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 3)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 1)).to.equal("skiing, ice skating");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], "1")).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions("skiing", 1)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 3)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 1)).to.equal("skiing, ice skating");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], "1")).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions("skiing", 1)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(() => planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 3)).to.throw("Invalid Information!");
    });
    it("activityIndex is not a number", function () {
        expect(planYourTrip.exploreOptions(["skiing", "snowboarding", "ice skating"], 1)).to.equal("skiing, ice skating");
    });
});