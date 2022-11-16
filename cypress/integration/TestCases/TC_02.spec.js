it('Sauce-Demo test',function(){
    cy.visit('https://www.saucedemo.com')
    const username ='//input[@name="user-name"]';
    const password ='//input[@name="password"]';
    const productAdd ='//button[@name="add-to-cart-sauce-labs-backpack"]';
    const productAdd2 = '//button[@name="add-to-cart-sauce-labs-bike-light"]';
    const productAdd3 = '//button[@name="add-to-cart-sauce-labs-bolt-t-shirt"]';
    const cart = '//a[@class="shopping_cart_link"]';
    cy.xpath(username).type("standard_user")
    cy.xpath(password).type("secret_sauce{enter}")
    cy.get('.title').should('contain','Products')
    cy.xpath(productAdd).click()
    cy.xpath(productAdd2).click()
    cy.xpath(productAdd3).click()
    cy.xpath(cart).click()
    cy.get('#item_4_title_link > .inventory_item_name').should('contain','Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain','Sauce Labs Bike Light')
    cy.get('#item_1_title_link > .inventory_item_name').should('contain','Sauce Labs Bolt T-Shirt')
    cy.screenshot()
})