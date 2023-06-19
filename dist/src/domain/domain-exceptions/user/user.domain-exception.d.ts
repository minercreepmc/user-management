import { DomainExceptionBase } from 'common-base-classes';
import { UserDomainExceptionCodes } from './user.domain-exception-code';
export declare abstract class UserValidationException extends DomainExceptionBase {
}
export declare abstract class UserBusinessException extends DomainExceptionBase {
}
export declare namespace UserDomainExceptions {
    class DoesNotExist extends UserBusinessException {
        readonly message = "User does not exist";
        readonly code = UserDomainExceptionCodes.DoesNotExist;
    }
    class AlreadyExists extends UserBusinessException {
        readonly message = "User already exists";
        readonly code = UserDomainExceptionCodes.AlreadyExists;
    }
    class UsernameAlreadyExists extends UserBusinessException {
        readonly message = "User name already exists";
        readonly code = UserDomainExceptionCodes.UsernameAlreadyExists;
    }
    class UsernameDoesNotValid extends UserValidationException {
        readonly message = "User name does not valid";
        readonly code = UserDomainExceptionCodes.UsernameDoesNotValid;
    }
    class EmailAlreadyExists extends UserBusinessException {
        readonly message = "User email already exists";
        readonly code = UserDomainExceptionCodes.EmailAlreadyExists;
    }
    class EmailDoesNotExist extends UserValidationException {
        readonly message = "User email does not exist";
        readonly code = UserDomainExceptionCodes.EmailDoesNotExist;
    }
    class EmailDoesNotValid extends UserValidationException {
        readonly message = "User email does not valid";
        readonly code = UserDomainExceptionCodes.EmailDoesNotValid;
    }
    class FirstNameDoesNotValid extends UserValidationException {
        readonly message = "User first name does not valid";
        readonly code = UserDomainExceptionCodes.FirstNameDoesNotValid;
    }
    class LastNameDoesNotValid extends UserValidationException {
        readonly message = "User last name does not valid";
        readonly code = UserDomainExceptionCodes.LastNameDoesNotValid;
    }
    class PasswordDoesNotValid extends UserValidationException {
        readonly message = "User password does not valid";
        readonly code = UserDomainExceptionCodes.PasswordDoesNotValid;
    }
    class CredentialDoesNotValid extends UserValidationException {
        readonly message = "User credential does not valid";
        readonly code = UserDomainExceptionCodes.CredentialDoesNotValid;
    }
}
