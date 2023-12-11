export default function createAccount () {}
import { functions } from '../support'

describe('Create account ', () => {

    beforeEach(() => {
      cy.visit('https://dev-loja.supremotv.com.br')
    })
    
   it('Create a new user', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Criar uma conta').scrollIntoView().click();
        cy.wait(1000);
        cy.contains('Nome'). scrollIntoView().click().type(`Flavia Fernandes+${new Date().getTime()}`) ;
        cy.contains('Nome Curto').scrollIntoView().click().type('Flávia');
        cy.contains('E-mail').scrollIntoView().click().type(`flavia${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.contains('CPF').scrollIntoView().click().type(functions());
        cy.contains('criar conta').scrollIntoView().click();
    })
    
    it.only('Required field message : Nome', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Criar uma conta').scrollIntoView().click();
        cy.wait(1000);
        cy.contains('E-mail').scrollIntoView().click().type(`flavia${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.contains('CPF'). scrollIntoView().click().type(functions());
        cy.contains('criar conta').scrollIntoView().click();
        cy.contains('Nome').next().get('span').contains('Campo obrigatório');
    })

    it.only('Required field message : E-mail', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Criar uma conta'). scrollIntoView(). click();
        cy.contains('Nome'). scrollIntoView(). click(). type('Flávia Fernandes');
        cy.contains('CPF'). scrollIntoView(). click(). type(functions());
        cy.contains('criar conta').scrollIntoView().click();
        cy.contains('E-mail').next().get ('span').contains ('Campo obrigatório');
    })

    it.only('Required field message : CPF', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Criar uma conta').scrollIntoView().click();
        cy.contains('Nome').scrollIntoView().click().type('Flávia Fernandes');
        cy.contains('E-mail').scrollIntoView().click().type(`flavia${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.contains('criar conta').scrollIntoView().click();
        cy.contains('CPF').next().get ('span').contains ('Campo obrigatório');
    })

    it.only('All required field messages ', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Criar uma conta'). scrollIntoView(). click();
        cy.contains('criar conta').scrollIntoView().click();
        cy.contains('Nome').next().get ('span').contains ('Campo obrigatório');
        cy.contains('CPF').next().get ('span').contains ('Campo obrigatório');
        cy.contains('E-mail').next().get ('span').contains ('Campo obrigatório');
    })

})