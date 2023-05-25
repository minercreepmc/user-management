export class RegisterMemberResponseDto {
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;

  constructor(dtos: RegisterMemberResponseDto) {
    this.username = dtos.username;
    this.email = dtos.email;
    this.firstName = dtos.firstName;
    this.lastName = dtos.lastName;
  }
}
