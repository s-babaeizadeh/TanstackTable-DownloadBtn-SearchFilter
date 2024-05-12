import { faker } from '@faker-js/faker';


export const USERS = [];

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstname: faker.name.firstName(),
    lastname:faker.name.lastName(),
    age: faker.datatype.number(50),
    visits: faker.datatype.number(1000),
    progress: faker.datatype.number(100),
  };
}

Array.from({ length: 30 }).forEach(() => {
  USERS.push(createRandomUser());
});