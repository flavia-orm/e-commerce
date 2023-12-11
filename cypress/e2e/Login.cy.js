export default function login () {}
describe('Logando no sistema e-commerce', () => {

    beforeEach(() => {
      cy.visit('https://dev-loja.supremotv.com.br')
    })

    it('Login e-commerce with a valid account', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('E-mail'). scrollIntoView().click().type('flavia@80lines.com');
        cy.contains('Senha'). scrollIntoView().click().type('@80Lines');
        cy.contains('Acessar').scrollIntoView().click();
    })

    it('Invalid account message', () => {
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('E-mail').scrollIntoView().click().type('flavia@80lines.com');
        cy.contains('Senha').scrollIntoView().click().type('123');
        cy.contains('Acessar').scrollIntoView().click();
        cy.contains("Aluno e/ou senha inválidos").should('be.visible');
    })

    it('Invalid Email Message',()=>{
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('E-mail').scrollIntoView().click().type('flavia@80lines');
        cy.contains('Senha').scrollIntoView().click().type('123');
        cy.contains('Acessar').scrollIntoView().click();
        cy.contains('E-mail').next().get('span').contains ('E-mail inválido');
    })

    it('Required fields message',()=>{
        cy.get('#headlessui-popover-button-1 > .space-x-xs'). click();
        cy.get('.space-y-md > .border'). click();
        cy.contains('E-mail').next().get ('span').contains ('Campo obrigatório.');
        cy.contains('Senha').next().get ('span').contains ('Campo obrigatório.');
    })

    it('Forgot password',()=>{
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Esqueci minha senha').scrollIntoView().click();
        cy.contains('Email').scrollIntoView().click().type('flavia@80lines.com');
        cy.contains('Redefinir senha').scrollIntoView().click();
        cy.contains("Senha temporária enviada para o e-mail cadastrado").should('be.visible');
    })

    it('Required Field Message (Reset Password)',()=>{
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Esqueci minha senha').scrollIntoView().click();
        cy.contains('Redefinir senha').scrollIntoView().click();
        cy.contains('Email').next().get('span').contains('Campo obrigatório.');
    })

    it('Student not found message (Reset password)',()=>{
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Esqueci minha senha').scrollIntoView().click();
        cy.contains('Email'). scrollIntoView().click().type('flavia.ormf@gmail.com');
        cy.contains('Redefinir senha').scrollIntoView().click();
        cy.contains('Aluno não encontrado').should('be.visible');
    })

    it('Invalid email message (Reset password)',()=>{
        cy.contains('Entre ou Cadastre-se').scrollIntoView().click();
        cy.contains('Esqueci minha senha').scrollIntoView().click();
        cy.contains('Email'). scrollIntoView().click().type('flavia.ormf@gmail');
        cy.contains('Redefinir senha').scrollIntoView().click();
        cy.contains('Email').next().get ('span').contains ('E-mail inválido');
    })

})