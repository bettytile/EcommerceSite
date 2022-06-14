describe("Load the Ecomrce Page",()=> {
    it("Load Home Page", () => {
        cy.visit('http://localhost/ecommerce-website');
      cy.get('#content > div > div:nth-child(1) > div > div > p.buttons > a.btn.btn-primary').click();
    })
})