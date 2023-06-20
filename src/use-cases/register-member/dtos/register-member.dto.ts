import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';

export class RegisterMemberRequestDto extends RequestDtoBase<RegisterMemberResponseDto> {
  username: string;
  password: string;
  email?: string;
  firstName?: string;
  lastName?: string;

  constructor(dtos: Omit<RegisterMemberRequestDto, 'returnType'>) {
    super();
    this.username = dtos.username;
    this.password = dtos.password;
    this.email = dtos.email;
    this.firstName = dtos.firstName;
    this.lastName = dtos.lastName;
  }
}

export class RegisterMemberResponseDto extends ResponseDtoBase {
  username: string;

  email?: string;
  firstName?: string;
  lastName?: string;
  constructor(dtos: Omit<RegisterMemberResponseDto, 'message'>) {
    super('member registered successfully.');
    this.username = dtos.username;
    this.email = dtos.email;
    this.firstName = dtos.firstName;
    this.lastName = dtos.lastName;
  }
}
