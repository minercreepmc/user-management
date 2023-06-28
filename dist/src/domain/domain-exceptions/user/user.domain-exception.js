"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDomainExceptions = exports.UserBusinessException = exports.UserValidationException = void 0;
const common_base_classes_1 = require("common-base-classes");
const user_domain_exception_code_1 = require("./user.domain-exception-code");
class UserValidationException extends common_base_classes_1.DomainExceptionBase {
}
exports.UserValidationException = UserValidationException;
class UserBusinessException extends common_base_classes_1.DomainExceptionBase {
}
exports.UserBusinessException = UserBusinessException;
var UserDomainExceptions;
(function (UserDomainExceptions) {
    class DoesNotExist extends UserBusinessException {
        constructor() {
            super(...arguments);
            this.message = 'User does not exist';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.DoesNotExist;
        }
    }
    UserDomainExceptions.DoesNotExist = DoesNotExist;
    class AlreadyExists extends UserBusinessException {
        constructor() {
            super(...arguments);
            this.message = 'User already exists';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.AlreadyExists;
        }
    }
    UserDomainExceptions.AlreadyExists = AlreadyExists;
    class UsernameAlreadyExists extends UserBusinessException {
        constructor() {
            super(...arguments);
            this.message = 'User name already exists';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.UsernameAlreadyExists;
        }
    }
    UserDomainExceptions.UsernameAlreadyExists = UsernameAlreadyExists;
    class UsernameDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User name does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.UsernameDoesNotValid;
        }
    }
    UserDomainExceptions.UsernameDoesNotValid = UsernameDoesNotValid;
    class EmailAlreadyExists extends UserBusinessException {
        constructor() {
            super(...arguments);
            this.message = 'User email already exists';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.EmailAlreadyExists;
        }
    }
    UserDomainExceptions.EmailAlreadyExists = EmailAlreadyExists;
    class EmailDoesNotExist extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User email does not exist';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.EmailDoesNotExist;
        }
    }
    UserDomainExceptions.EmailDoesNotExist = EmailDoesNotExist;
    class EmailDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User email does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.EmailDoesNotValid;
        }
    }
    UserDomainExceptions.EmailDoesNotValid = EmailDoesNotValid;
    class FirstNameDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User first name does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.FirstNameDoesNotValid;
        }
    }
    UserDomainExceptions.FirstNameDoesNotValid = FirstNameDoesNotValid;
    class LastNameDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User last name does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.LastNameDoesNotValid;
        }
    }
    UserDomainExceptions.LastNameDoesNotValid = LastNameDoesNotValid;
    class PasswordDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User password does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.PasswordDoesNotValid;
        }
    }
    UserDomainExceptions.PasswordDoesNotValid = PasswordDoesNotValid;
    class CredentialDoesNotValid extends UserValidationException {
        constructor() {
            super(...arguments);
            this.message = 'User credential does not valid';
            this.code = user_domain_exception_code_1.UserDomainExceptionCodes.CredentialDoesNotValid;
        }
    }
    UserDomainExceptions.CredentialDoesNotValid = CredentialDoesNotValid;
})(UserDomainExceptions = exports.UserDomainExceptions || (exports.UserDomainExceptions = {}));
//# sourceMappingURL=user.domain-exception.js.map