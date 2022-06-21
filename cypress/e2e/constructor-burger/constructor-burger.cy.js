describe("service is available", function () {
  beforeEach("passes", () => {
    cy.visit("http://localhost:3000");
  });

  it("open and close modal with description ingredient", () => {
    cy.get("[class^=ingredient-item_item]").first().click();
    cy.get("[class^=modal-overlay]", { timeout: 2000 })
      .should("be.visible")
      .as("modal");
    cy.get("@modal").contains("Детали ингредиента");
    cy.get("@modal").contains("Краторная булка N-200i");
    cy.get("@modal").contains("420");
    cy.get("@modal").contains("80");
    cy.get("@modal").contains("24");
    cy.get("@modal").contains("53");
    cy.get("[class^=modal_button]").click();
    cy.get("[class^=modal-overlay]").should("not.exist");
  });

  it("dragging an ingredient into the constructor", () => {
    cy.get("[class^=ingredient-item_item]")
      .first()
      .trigger("dragstart")
      .trigger("dragleave");
    cy.get("[class^=burger-constructor_constructor]")
      .trigger("dragenter")
      .trigger("dragover")
      .trigger("drop")
      .trigger("dragend");
  });

  it("placing an order and open modal", () => {
    cy.get("[class^=burger-constructor_constructor]").as("constructor");
    cy.get("#60d3b41abdacab0026a733c6").drag("@constructor");
    cy.get("#60d3b41abdacab0026a733ca").drag("@constructor");
    cy.get("button").contains("Оформить заказ").click();
    cy.get('input[name="email"]').type("test11@yandex.ru");
    cy.get('input[name="password"]').type("1234567890");
    cy.get("button").contains("Войти").click().wait(500);
    cy.get("button").contains("Оформить заказ").click().wait(18000);
    cy.get("[class^=modal-overlay]").should("be.visible").as("modal");
    cy.get("@modal").contains("Ваш заказ начали готовить");
    cy.get("[class^=modal_button]").click();
    cy.get("[class^=modal-overlay]").should("not.exist");
  });
});
