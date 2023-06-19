import { SignInCommand } from '@use-cases/sign-in/dtos';
export declare class V1SignInHttpRequest implements SignInCommand {
    username: string;
    email: string;
    password: string;
}
