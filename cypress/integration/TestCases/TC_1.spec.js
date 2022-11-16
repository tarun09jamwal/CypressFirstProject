it('Sauce-Demo test',function(){
    cy.visit('https://www.saucedemo.com')
    const username ='//input[@name="user-name"]';
    const password ='//input[@name="password"]';
    const productAdd ='//button[@name="add-to-cart-sauce-labs-backpack"]';
    cy.xpath(username).type("standard_user")
    cy.xpath(password).type("secret_sauce{enter}")
    cy.get('.title').should('contain','Products')
    cy.xpath(productAdd).click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('contain','Remove')
})