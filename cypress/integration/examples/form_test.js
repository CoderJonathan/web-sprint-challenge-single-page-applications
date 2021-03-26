describe('Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/form')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni')
    const hamInput = () => cy.get('input[name=ham')
    const baconInput = () => cy.get('input[name=bacon')
    const pineappleInput = () => cy.get('input[name=pineapple')
    const instructionsInput = () => cy.get('textarea[name=special]')
    const submitBtn = () => cy.get("button[id=submit]")

    it('sanity check', () => {
        expect(1+1).to.equal(2)
    })

    it('Functionality of inputs', () => {
        nameInput()
            .type('Jonathan Garcia')

        sizeInput()
            .select('Small')
            .should('have.value', 'Sm')

        pepperoniInput().click()
            .should('have.value', 'on')

        hamInput().click()
            .should('have.value', 'on')

        baconInput().click()
            .should('have.value', 'on')

        pineappleInput().click()
            .should('have.value', 'on')

        instructionsInput()
            .type("I would like like extra cheese please!")
            .should('have.value', "I would like like extra cheese please!")

        submitBtn().click()
    })
})