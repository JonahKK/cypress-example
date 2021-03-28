import { SorryMessage } from "./sorry_message";

export class PersonalDetailsSingleTrip {
    public static visit(): PersonalDetailsSingleTrip {
        cy.visit('personal-details-single-trip')
        return new PersonalDetailsSingleTrip();
    }

    public writeFullName(name: string): PersonalDetailsSingleTrip {
        cy.get('[id="username"]')
            .clear()
            .type(name)
            .blur();

        return this;
    }

    public getNameError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="username-helper-text"]')
    }

    public writeAge(age: number): PersonalDetailsSingleTrip {
        cy.get('[id="age"]')
        .clear()
        .type(age.toString())
        .blur();
        return this;
    }

    public setPreExistingMedicalConditions(status: boolean): PersonalDetailsSingleTrip {
        if (status) {
            cy.get('[name="medical"][value="false"]').check();
        } else {
            cy.get('[name="medical"][value="false"]').uncheck();
        }

        return this;
    }

    public clickNextButtonWithMedicalCondition(): SorryMessage {
        cy.get('button')
        .contains('Next')
        .click();
        return new SorryMessage();
    }

    public getAgeError(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[id="age-helper-text"]')
    }
}

