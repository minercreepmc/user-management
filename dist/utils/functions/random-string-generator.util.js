"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomEmail = exports.generateRandomLastName = exports.generateRandomFirstName = exports.generateRandomPassword = exports.generateRandomUsername = void 0;
let counter = 0;
function generateRandomString(length) {
    const randomString = Math.random()
        .toString(36)
        .substring(2, 2 + length);
    const timestamp = new Date().getTime();
    counter += 1;
    return `${randomString}${timestamp}${counter}`;
}
function generateRandomUsername() {
    const usernameLength = 8;
    return generateRandomString(usernameLength);
}
exports.generateRandomUsername = generateRandomUsername;
function generateRandomPassword() {
    const passwordLength = 8;
    return generateRandomString(passwordLength);
}
exports.generateRandomPassword = generateRandomPassword;
function generateRandomFirstName() {
    const firstNameLength = 5;
    return generateRandomString(firstNameLength);
}
exports.generateRandomFirstName = generateRandomFirstName;
function generateRandomLastName() {
    const lastNameLength = 7;
    return generateRandomString(lastNameLength);
}
exports.generateRandomLastName = generateRandomLastName;
function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const timestamp = new Date().getTime();
    counter += 1;
    return `${randomString}${timestamp}${counter}@example.com`;
}
exports.generateRandomEmail = generateRandomEmail;
//# sourceMappingURL=random-string-generator.util.js.map