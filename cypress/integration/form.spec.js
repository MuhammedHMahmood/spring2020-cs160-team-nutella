describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");
    cy.get("form");

    cy.get('input[name="email"]')
      .type("michael@gmail.com")
      .should("have.value", "michael@gmail.com");

    cy.get('input[name="psw"]')
      .type("qwerty7")
      .should("have.value", "qwerty7");

      cy.get("form").submit();
    
  });
});