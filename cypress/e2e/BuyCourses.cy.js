export default function buyCourse () {}
import { functions } from '../support'
import {tab} from 'cypress-plugin-tab'
describe('Comprando um curso', () => {
    
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('https://dev-loja.supremotv.com.br')
    })
    
    it('Comprando um curso com um cartão de crédito criando uma nova conta', () => {
        cy.contains('Cursos').scrollIntoView().click();
        cy.wait(1000);
        cy.contains('Clube da Casa do Delegado 2022').scrollIntoView().click();
        cy.contains('Comprar Agora').scrollIntoView().click();
        cy.contains('Nome'). scrollIntoView().click().type ('Flavia Fernandes');
        cy.contains('Nome Curto'). scrollIntoView().click().type ('Flavia');
        cy.contains('E-mail').scrollIntoView().click().type(`flavia${Math.round(Math.random() * 100)}@mailinator.com`);
        cy.contains('CPF').scrollIntoView().click().type(functions());
        cy.contains('Telefone').scrollIntoView().click().type ('21995623494');
        cy.contains('Data de nascimento').scrollIntoView().click(). type ('21021998');
        cy.contains('CEP').scrollIntoView().click().type ('25255260');
        cy.wait(1000);
        cy.contains('Número').scrollIntoView().click().type ('1');
        cy.contains('Ler').scrollIntoView().click();
        cy.contains('Aceitar Termos de Contrato').scrollIntoView(). click();
        cy.get('#text-input-singleCardName').type('FLAVIA FERNANDES');
        cy.get('#card-input-singleCard').type('5240082975622454');
        cy.get('#react-select-4-placeholder').click(); // para pegar a numeração do select mês de vencimento
        cy.get('#react-select-4-listbox').contains('12'). click();
        cy.get('#react-select-5-placeholder').click(); // para pegar a numeração do select ano de vencimento
        cy.get('#react-select-5-listbox').contains('2026'). click(); 
        cy.get('#text-input-singleCardCvc').type('123');
        cy.get('#react-select-6-placeholder').click();  // para selecionar o número de parcelas
        cy.get('#react-select-6-listbox').contains('3'). click();
        cy.contains('Finalizar compra').scrollIntoView(). click();
        })

    it.only('Comprando um curso com dois cartões de crédito criando uma nova conta', () => {
      cy.contains('Cursos').scrollIntoView().click();
      cy.wait(1000);
      cy.contains('Clube da OAB │ XXXVI Exame').scrollIntoView().click();
      cy.contains('Comprar Agora').scrollIntoView().click();
      cy.contains('Nome'). scrollIntoView().click().type ('Flavia Fernandes');
      cy.contains('Nome Curto'). scrollIntoView().click().type ('Flavia');
      cy.contains('E-mail').scrollIntoView().click().type(`flavia${Math.round(Math.random() * 100)}@mailinator.com`);
      cy.contains('CPF').scrollIntoView().click().type(functions());
      cy.contains('Telefone').scrollIntoView().click().type ('21995623494');
      cy.contains('Data de nascimento').scrollIntoView().click(). type ('21021998');
      cy.contains('CEP').scrollIntoView().click().type ('25255260');
      cy.wait(1000);
      cy.contains('Número').scrollIntoView().click().type ('1');
      cy.contains('Ler').scrollIntoView().click();
      cy.contains('Aceitar Termos de Contrato').scrollIntoView().click();
      cy.contains('Pagar com 2 cartões').scrollIntoView().click();
      cy.contains('Valor no primeiro cartão').scrollIntoView().click().type('1000,00');
      cy.contains('Valor no primeiro cartão').scrollIntoView().click().focused().tab().type('592,00');// como o componente tem o mesmo id optei em dar tab de um para o outro
      cy.get('#text-input-multiCard1Name').type('FLAVIA FERNANDES')
      cy.get('#text-input-multiCard1Name').focused().tab().type('4539620659922097')
      cy.get('#react-select-7-placeholder').click();
      cy.get('#react-select-7-listbox').contains('12'). click();
      cy.get('#react-select-8-placeholder').click(); 
      cy.get('#react-select-8-listbox').contains('2026'). click(); 
      cy.get('#text-input-multiCard1Cvc').type('123');
      cy.get('#react-select-9-placeholder').click();  
      cy.get('#react-select-9-listbox').contains('8'). click();
  
      cy.get('input[id="text-input-multiCard2Name"]').eq(2).click().type('FLAVIA MORAIS');
      cy.get('input[id="text-input-multiCard2Name"]').eq(2).click().focused().tab().type('5240082975622454');
      cy.get('#react-select-10-placeholder').click();
      cy.get('#react-select-10-listbox').contains('12'). click();
      cy.get('#react-select-11-placeholder').click(); 
      cy.get('#react-select-11-listbox').contains('2026'). click(); 
      cy.get('#text-input-multiCard2Cvc').type('123');
      cy.get('#react-select-12-placeholder').click();
      cy.get('#react-select-12-listbox').contains('2'). click();
      cy.contains('Finalizar compra').scrollIntoView(). click();
      cy.wait(2000);
      cy.contains('Matrícula Concluída').should('be.visible');
    })


      it('Verificação de todas as mensagens de campo obrigatorio', () => {
      cy.visit('https://dev-loja.supremotv.com.br')
      cy.contains('Cursos'). scrollIntoView(). click();
      cy.contains('ALMG Técnico de Apoio Legislativo 2022 - Edital Publicado'). scrollIntoView(). click();
      cy.contains('Comprar Agora'). scrollIntoView(). click();
      cy.contains('Ler'). scrollIntoView(). click();
      cy.contains('Aceitar Termos de Contrato'). scrollIntoView(). click();
      cy.contains('Finalizar compra'). scrollIntoView(). click();
      cy.contains('DADOS PESSOAIS'). scrollIntoView(). click();
      cy.contains('Nome').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Nome Curto').next().get ('span').contains ('Campo obrigatório');
      cy.contains('E-mail').next().get ('span').contains ('Campo obrigatório');
      cy.contains('CPF').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Telefone').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Data de nascimento').next().get ('span').contains ('Campo obrigatório');
      cy.contains('CEP').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Endereço').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Número').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Estado').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Cidade'). scrollIntoView(). click();
      cy.contains('Cidade').next().get ('span').contains ('Campo obrigatório');
      cy.contains('Bairro').next().get ('span').contains ('Campo obrigatório');
      cy.get('#text-input-singleCardName'). next().get ('span').contains ('Campo obrigatório');
      cy.get('#card-input-singleCard'). next().get ('span').contains ('Campo obrigatório');
      cy.get('#react-select-4-placeholder'). next().get ('span').contains ('Campo obrigatório');
      cy.get('#react-select-5-placeholder'). next().get ('span').contains ('Campo obrigatório');
      cy.get('#text-input-singleCardCvc'). next().get ('span').contains ('Campo obrigatório');
      cy.get('#react-select-6-placeholder'). next().get ('span').contains ('Campo obrigatório');
      })
})