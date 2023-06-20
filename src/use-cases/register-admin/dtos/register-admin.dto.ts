import { RequestDtoBase, ResponseDtoBase } from '@base/use-cases';

export class RegisterAdminRequestDto extends RequestDtoBase<RegisterAdminResponseDto> {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;

  constructor(dto: Omit<RegisterAdminRequestDto, 'returnType'>) {
    super();
    this.username = dto.username;
    this.email = dto.email;
    this.password = dto.password;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}

export class RegisterAdminResponseDto extends ResponseDtoBase {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;

  constructor(dto: Omit<RegisterAdminResponseDto, 'message'>) {
    super('admin registered successfully');
    this.username = dto.username;
    this.email = dto.email;
    this.firstName = dto.firstName;
    this.lastName = dto.lastName;
  }
}
