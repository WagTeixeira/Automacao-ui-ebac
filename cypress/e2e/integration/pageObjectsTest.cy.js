/// <reference types="cypress" />
const loginPage = require('../support/pages/login.page')
const dashboardPage = require('../support/pages/dashboard.page')
const data = require('../fixtures/data.json')

describe('Access Admin Panel', () => {
    beforeEach (() => {
        cy.visit('/wp-admin')
    })

    it('should login with valid credentials', () => {
        loginPage.login(data.usuario, data.senha)
        
        expect(dashboardPage.siteName.should("be.visible"))
    });
});