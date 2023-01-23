/// <reference types="cypress" />

describe('template spec', { baseUrl: Cypress.env('CYPRESS_BASE_URL') }, () => {
  it('passes', () => {
    cy.visit('/')
  })
})