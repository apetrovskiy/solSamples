import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("specs/features/sample-activity.feature");
defineFeature(feature, (test) => {
    test("a new account's activity", ({ given, when, then }) => {
        given("a new user registers in Ethereum", () => {
            console.log('given');
        });
        when("user sends Eth", () => {
            console.log('when');
        });
        then("the recipient has balance increased", () => {
            console.log('then 1');
        });
        then("the sender has balance decreased", () => {
            console.log('then 2');
        });
    });
});