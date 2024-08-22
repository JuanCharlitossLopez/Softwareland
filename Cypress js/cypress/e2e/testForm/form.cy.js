/// <reference types="cypress" />

//cy.get(':nth-child(30)')


describe("My loading page", () => {
  beforeEach(() => {
    cy.viewport("macbook-11");
    cy.visit("http://localhost:3000/", { failOnStatusCode: false });
  });

  it("assertions for validate form loading", () => {
    // title
    cy.get('h1').should('exist');
    //form inputs and labels
    cy.get('.form > :nth-child(1)').should('be.visible').should('contain', 'Nombre');
    cy.get('[name="name"]').should("be.empty").should('be.visible');
    cy.get('.form > :nth-child(4)').should('be.visible').should('contain', 'Apellido');
    cy.get('[name="lastName"]').should("be.empty").should('be.visible');
    cy.get('.form > :nth-child(7)').should('be.visible').should('contain','Email');
    cy.get('[name="email"]').should("be.empty");
    cy.get('.form > :nth-child(10)').should('be.visible').should('contain','Contraseña');
    cy.get('[name="password"]').should("be.empty");
    cy.get('[type="number"]').should("be.empty");
    cy.get('[type="number"]').should("be.empty");
    cy.get('[value=female').should("be.empty");
    cy.get('[value=male').should("be.empty");
    cy.get('select').select('Admin');
    cy.get(".check").uncheck();
    cy.get(".textarea").should('be.empty');
    cy.get('[type="date"]').should('be.empty');
    // buttons
    cy.get('.btn-primary').should('be.visible').should('contain','Mostrar').should('have.css','background-color');
    cy.get('.btn-secondary').should('be.visible').should('contain', 'Reiniciar').should('have.css','background-color');
    // tabla
    cy.get('thead > tr > :nth-child(1)').should('contain','Nombre');
    cy.get('thead > tr > :nth-child(2)').should('contain','Apellido');
    cy.get('thead > tr > :nth-child(3)').should('contain','Email');
    cy.get('thead > tr > :nth-child(4)').should('contain','Contraseña');
    cy.get('thead > tr > :nth-child(5)').should('contain','Edad');
    cy.get('thead > tr > :nth-child(6)').should('contain','Genero');
    cy.get('thead > tr > :nth-child(7)').should('contain','Rol');
    cy.get('thead > tr > :nth-child(8)').should('contain','Terminos');
    cy.get('thead > tr > :nth-child(9)').should('contain','Notas');
    cy.get('thead > tr > :nth-child(10)').should('contain','Fecha de registro');
    cy.get('thead > tr > :nth-child(11)').should('contain','Acciones');
    cy.get('td').should('contain','No hay datos');
  });

  it("Fill and submit form with fixture", () => {
    // fixtures/user.json
    cy.fixture("user").then((usersFixture) => {
      usersFixture.forEach((user) => {
        cy.get('[name="name"]')
          .type(user.name)
          .should("have.value", user.name)
          .invoke("val")
          .should("have.length", user.name.length)
          .should("not.be.empty");

        cy.get('[name="lastName"]')
          .type(user.lastName)
          .should("have.value", user.lastName)
          .invoke("val")
          .should("have.length", user.lastName.length)
          .should("not.be.empty");

        cy.get('[type="email"]')
          .type(user.email)
          .should("have.value", user.email)
          .invoke("val")
          .should("match", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
          .should("not.be.empty");

        cy.get('[type="password"]')
          .type(user.password)
          .should("have.value", user.password)
          .invoke("val")
          .should("have.length", user.password.length)
          .should("not.be.empty");

        cy.get('[type="number"]')
          .type(user.age)
          .should("have.value", user.age)
          .invoke("val")
          .then(parseInt)
          .should("be.within", 18, 100);

        cy.get(`[value="${user.gender}"]`)
          .click()
          .should("be.checked")
          .should("have.value", user.gender);

        cy.get("select")
          .select(user.role)
          .should("have.value", user.role)
          .should("not.be.empty");

        cy.get(".check")
          .check()
          .should("be.checked")
          .should("have.value", "on");

        cy.get(".textarea")
          .type(user.description)
          .should("have.value", user.description)
          

        cy.get('[type="date"]')
          .type(user.date)
          .should("have.value", user.date)
          .invoke("val")
          .should("match", /^\d{4}-\d{2}-\d{2}$/)
          .should("not.be.empty");

        cy.get(".btn-primary").click();

        cy.wait(2000);

        cy.get(".btn-warning").last().click();
      });
    });
  });

});
