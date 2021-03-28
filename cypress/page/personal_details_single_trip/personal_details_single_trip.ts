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
        cy.get('[id="age"]').clear().type(age.toString());
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

    public clickNextButtonWithMedicalCondition(){
        cy.get('button').contains('Next').click();
        return new SorryMessage();
    }
}

class SorryMessage{
    public assertMessageIsOpen(){
        cy.contains('We aren’t able to offer cover to people with pre-existing medical conditions. We’re working hard to change this.').should('exist');
    }
}