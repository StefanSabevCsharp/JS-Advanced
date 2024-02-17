import {expect} from 'chai';
import {planYourTrip} from "../planYourTrip.js";

describe('test', () => {
    describe("choosingDestination", () => {
        it("year is not good", () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort","summer",2010)).to.throw("Invalid Year!");
        })
        it("different destination", () => {
            expect(() => planYourTrip.choosingDestination("sofia","summer",2024)).to.throw("This destination is not what you are looking for.");
        })
        it("happy path", () => {
            expect(planYourTrip.choosingDestination("Ski Resort","Winter",2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`)
        })
        it("happy path 2", () => {
            expect(planYourTrip.choosingDestination("Ski Resort","Summer",2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
        })
    });

    describe("exploreOptions" , () => {
        it("removeActivity" , () => {
            expect(planYourTrip.exploreOptions(["Sky","Diving","Eating"],1)).to.equal(`Sky, Eating`)
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions(["Sky","Diving","Eating"],"Sky")).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions("Sky","Sky")).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions(1,"Sky")).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions(1,2)).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions({},{})).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions(["Sky","Diving","Eating"],10)).to.throw("Invalid Information!");
        });
        it("removeActivity throws Error" , () => {
            expect( () => planYourTrip.exploreOptions(["Sky","Diving","Eating"],11.25)).to.throw("Invalid Information!");
        });
    })

    describe("estimateExpenses" , () => {
        it("calculate cost of travel" , () => {
            expect(planYourTrip.estimateExpenses(100,2)).to.equal(`The trip is budget-friendly, estimated cost is $200.00.`)
        });
        it("calculate cost of travel" , () => {
            expect(planYourTrip.estimateExpenses(250,2)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`)
        });
        it("calculate cost of travel" , () => {
            expect(planYourTrip.estimateExpenses(250,3)).to.equal(`The estimated cost for the trip is $750.00, plan accordingly.`)
        });

        it("throws error with invalid parameters 1", () => {
            expect( () => planYourTrip.estimateExpenses("string",1)).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 2 ", () => {
            expect( () => planYourTrip.estimateExpenses(1,"string")).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 3 ", () => {
            expect( () => planYourTrip.estimateExpenses([],1)).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 4 ", () => {
            expect( () => planYourTrip.estimateExpenses({},1)).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 5", () => {
            expect( () => planYourTrip.estimateExpenses(1,"string")).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 6", () => {
            expect( () => planYourTrip.estimateExpenses(1,[])).to.throw("Invalid Information!");
        });
        it("throws error with invalid parameters 7 ", () => {
            expect( () => planYourTrip.estimateExpenses(1,{})).to.throw("Invalid Information!");
        });
        it("throws error with negative numbers 1 ", () => {
            expect( () => planYourTrip.estimateExpenses(1,-1)).to.throw("Invalid Information!");
        });
        it("throws error with negative numbers 1 ", () => {
            expect( () => planYourTrip.estimateExpenses(-2,1)).to.throw("Invalid Information!");
        });
       

    })
    
});