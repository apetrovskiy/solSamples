import { defineFeature, loadFeature } from "jest-cucumber";
const feature = loadFeature("specs/features/sample-activity.feature");
defineFeature(feature, (test) => {
    test("a new account's activity", ({ given, when, then }) => {
        given("there is a new user in Ethereum", () => {
            console.log('given 1');
        });
        given("there is another new user in Ethereum", () => {
            console.log('given 2');
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