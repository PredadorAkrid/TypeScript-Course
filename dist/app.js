"use strict";
var _a;
const e1 = {
    name: "Alexis",
    startDate: new Date(),
    privileges: ["create-server"],
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
const fetchedUserData = {
    id: "url",
    name: "Alexis",
    job: {
        title: "CEO",
        description: "My own company",
    },
};
console.log(fetchedUserData.job.title);
console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storeData = userInput || 'DEFAULT';
