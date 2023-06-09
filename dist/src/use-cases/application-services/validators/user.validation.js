"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestValidator = void 0;
const user_1 = require("../../../domain/domain-exceptions/user");
const use_cases_1 = require("../../../../utils/base/use-cases");
const user_2 = require("../../../domain/value-objects/user");
class UserRequestValidator extends use_cases_1.RequestValidatorBase {
    _validate(dto) {
        throw new Error('Method not implemented.');
    }
    translateExceptionToUserFriendlyMessage(options) {
        const { context, exception } = options;
        switch (context) {
            case user_2.UserNameValueObject.name:
                return new user_1.UserDomainExceptions.UsernameDoesNotValid();
            case user_2.UserEmailValueObject.name:
                return new user_1.UserDomainExceptions.EmailDoesNotValid();
            case user_2.UserPasswordValueObject.name:
                return new user_1.UserDomainExceptions.PasswordDoesNotValid();
            case user_2.UserFirstNameValueObject.name:
                return new user_1.UserDomainExceptions.FirstNameDoesNotValid();
            case user_2.UserLastNameValueObject.name:
                return new user_1.UserDomainExceptions.LastNameDoesNotValid();
            default:
                return exception;
        }
    }
    validateUserName(username) {
        const response = user_2.UserNameValueObject.validate(username);
        this.handlerValidationResponse({
            response,
            context: user_2.UserNameValueObject.name,
        });
    }
    validateUserEmail(email) {
        const response = user_2.UserEmailValueObject.validate(email);
        this.handlerValidationResponse({
            response,
            context: user_2.UserEmailValueObject.name,
        });
    }
    validateUserPassword(password) {
        const response = user_2.UserPasswordValueObject.validate(password);
        this.handlerValidationResponse({
            response,
            context: user_2.UserPasswordValueObject.name,
        });
    }
    validateUserFirstName(firstName) {
        const response = user_2.UserFirstNameValueObject.validate(firstName);
        this.handlerValidationResponse({
            response,
            context: user_2.UserFirstNameValueObject.name,
        });
    }
    validateUserLastName(lastName) {
        const response = user_2.UserLastNameValueObject.validate(lastName);
        this.handlerValidationResponse({
            response,
            context: user_2.UserLastNameValueObject.name,
        });
    }
}
exports.UserRequestValidator = UserRequestValidator;
//# sourceMappingURL=user.validation.js.map