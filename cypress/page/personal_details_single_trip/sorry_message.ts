export class SorryMessage {
    public assertMessageIsOpen() {
        cy.contains('We aren’t able to offer cover to people with pre-existing medical conditions. We’re working hard to change this.').should('exist');
    }
}
