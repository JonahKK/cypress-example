import { PersonalDetailsSingleTrip } from "../page/personal_details_single_trip/personal_details_single_trip";

describe('Personal details single trip tests', () => {

    /**
     * Given my name has non-latin characters.
     * When I type it into 'First and last name' field.
     * Then no validation errors are displayed.
     **/

    ['test Ötest', 'Ötest test', 'test testÖ'].forEach(name => {
        it(`Should not show error in case of non-latin character in full name - ${name}`, () => {
            PersonalDetailsSingleTrip.visit()
                .writeFullName(name)
                .getNameError()
                .should('have.text', '');
        });
    });

    /**
     * Given that I have pre-existing medical conditions.
     * When I select that during the process.
     * Then I cannot proceed and sorry message is displayed.
     */
    it('Should display sorry message in case of pre-existing medical conditions', () =>{
        PersonalDetailsSingleTrip.visit()
        .writeFullName('test test')
        .writeAge(40)
        .setPreExistingMedicalConditions(true)
        .clickNextButtonWithMedicalCondition()
        .assertMessageIsOpen();
    })
});