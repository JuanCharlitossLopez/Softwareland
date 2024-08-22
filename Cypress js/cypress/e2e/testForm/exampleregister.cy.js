/// <reference types="cypress" />

function fillAndSubmitForm() {
  // cy.visit("http://localhost:3000/", { failOnStatusCode: false });
  cy.get('[name="name"]').type("Juan");
  cy.get('[name="lastName"]').type("Garcia");
  cy.get('[type="email"]').type("juan.garcia@example.com");
  cy.get('[type="password"]').type("123456");
  cy.get('[type="number"]').type("25");
  cy.get('[value="male"]').click();
  // cy.get('[value="female"]').click();
  // cy.get('select').select('Admin');
  cy.get("select").select("User");
  cy.get(".check").check();
  cy.get(".textarea").type("Este es un texto de prueba");
  cy.get('[type="date"]').type("2024-08-20");
  cy.get(".btn-primary").click();
}

function editform() {
  fillAndSubmitForm();
  cy.get(".btn-warning").click();
  cy.wait(2000); // espera 2 segundos
  cy.get(".btn-warning").click();
  cy.get(".modal-footer > .btn-primary").click();
  // edita
  cy.get('[name="name"]').clear().type("Juanito");
  cy.get('[name="lastName"]').clear().type("Garcia Lopez");
  cy.get('[type="email"]').clear().type("juanito.garcia@example.com");
  cy.get('[type="password"]').clear().type("12345678");
  cy.get('[type="number"]').clear().type("30");
  cy.get('[value="female"]').click();
  cy.get("select").select("Admin");
  cy.get(".check").check();
  cy.get(".textarea").clear().type("Este es un texto de prueba editado");
  cy.get('[type="date"]').clear().type("2024-08-25");
  cy.get(".btn-primary").click();
  // Verificar que los cambios se guardaron correctamente
  cy.get(".btn-warning").click();
  cy.wait(2000); // espera 2 segundos
  //close modal
  cy.get(".btn-close").click();
  cy.get("tbody > tr > :nth-child(1)").should("have.text", "Juanito", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(2)").should("have.text", "Garcia Lopez", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(3)").should(
    "have.text",
    "juanito.garcia@example.com",
    { ignoreCase: true }
  );
  cy.get("tbody > tr > :nth-child(4)").should("have.text", "12345678", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(5)").should("have.text", "30");
  cy.get("tbody > tr > :nth-child(6)").should("have.text", "female", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(7)").should("have.text", "admin", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(8)").should("have.text", "Aceptado", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(9)").should(
    "have.text",
    "Este es un texto de prueba editado",
    { ignoreCase: true }
  );
  cy.get("tbody > tr > :nth-child(10)").should("have.text", "2024-08-25");
}

function checkData() {
  fillAndSubmitForm();
  cy.get(".btn-warning").click();
  cy.wait(2000); // espera 2 segundos
  cy.get("tbody > tr > :nth-child(1)").should("have.text", "Juan", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(2)").should("have.text", "Garcia", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(3)").should(
    "have.text",
    "juan.garcia@example.com",
    { ignoreCase: true }
  );
  cy.get("tbody > tr > :nth-child(4)").should("have.text", "123456", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(5)").should("have.text", "25");
  cy.get("tbody > tr > :nth-child(6)").should("have.text", "male", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(7)").should("have.text", "user", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(8)").should("have.text", "Aceptado", {
    ignoreCase: true,
  });
  cy.get("tbody > tr > :nth-child(9)").should(
    "have.text",
    "Este es un texto de prueba",
    { ignoreCase: true }
  );
  cy.get("tbody > tr > :nth-child(10)").should("have.text", "2024-08-20");
}

function deleteUser() {
  fillAndSubmitForm();
  cy.get(".btn-warning").click();
  cy.wait(2000); // espera 2 segundos
  // button delete
  cy.get(".btn-danger > .svg-inline--fa").click();
  // confirmar delete
  cy.get(".modal-footer > .btn-primary").click();
  // no datos en tabla
  cy.get('td').should("have.text", "No hay datos");
}

describe("My loading page", () => {

  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("http://localhost:3000/", { failOnStatusCode: false });
  })

  it("Fill and submit form", () => {
    fillAndSubmitForm();
  });

  it("Fill, submit form and save in table", () => {
    checkData();
  });

  it("Fill, submit form, save and edit", () => {
    editform();
  });

  it("Fill, submit form, save and delete", () => {
    deleteUser();
  });
});
