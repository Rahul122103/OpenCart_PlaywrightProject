import { faker } from "@faker-js/faker";

export class randomdatafaker {

    static getFirstName(): string {
        return faker.name.firstName();
    }

    static getLastName(): string {
        return faker.name.lastName();
    }

    static getFullName(): string {
        return faker.name.fullName();
    }

    static getEmail(): string {
        return faker.internet.email();
    }

    static getPhoneNumber(): string {
        return faker.phone.number();
    }

    static getUsername(): string {
        return faker.internet.userName();
    }

    static getPassword(): string {
        return faker.internet.password(10);
    }

    static getRandomCountry(): string {
        return faker.address.country();
    }

    static getRandomState(): string {
        return faker.address.state();
    }

    static getRandomCity(): string {
        return faker.address.city();
    }

    static getRandomPin(): string {
        return faker.address.zipCode();
    }

    static getRandomAddress(): string {
        return faker.address.streetAddress();
    }
}