const text = "qwerty7";

describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/");
    cy.get("form");

    cy.get('input[name="name"]')
      .type("michael")
      .should("have.value", "michael");

    cy.get('input[name="email"]')
      .type("michael@gmail.com")
      .should("have.value", "michael@gmail.com");

    cy.get('input[name="psw"]')
      .type("qwerty7")
      .should("have.value", "qwerty7");

      cy.get('input[name="psw-repeat"]')
      .type("qwerty7")
      .should("have.value", text);

      cy.get('input[name="address"]')
      .type("1234 street street")
      .should("have.value", "1234 street street");

      cy.get("form").submit();
    
  });
});