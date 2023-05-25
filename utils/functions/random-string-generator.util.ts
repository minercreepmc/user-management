let counter = 0;

function generateRandomString(length: number) {
  const randomString = Math.random()
    .toString(36)
    .substring(2, 2 + length);
  const timestamp = new Date().getTime();
  counter += 1;
  return `${randomString}${timestamp}${counter}`;
}

export function generateRandomUsername() {
  const usernameLength = 8;
  return generateRandomString(usernameLength);
}

export function generateRandomPassword() {
  const passwordLength = 8;
  return generateRandomString(passwordLength);
}

export function generateRandomFirstName() {
  const firstNameLength = 5;
  return generateRandomString(firstNameLength);
}

export function generateRandomLastName() {
  const lastNameLength = 7;
  return generateRandomString(lastNameLength);
}

export function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  const timestamp = new Date().getTime();
  counter += 1;
  return `${randomString}${timestamp}${counter}@example.com`;
}
