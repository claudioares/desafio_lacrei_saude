class TestMethods {
  element = {
    clickBtn: ()=> cy.get('#advanced_search'),
    changedPage: ()=> cy.url()
  }

  clickAdvancedSearch(){
    this.element.clickBtn().wait(7000).click();
  }

  changedPageConfirm(url:string) {
    this.element.changedPage().should('eq', url);
  }
}

const testMethods = new TestMethods();

describe('Test in my page and button "Busca Avançada"', () => {
  it('Visit the page to see if it is loading', () => {
    cy.visit('/')
  })

  it('Click on the "Advanced Search" button to check the page change', ()=>{
    testMethods.clickAdvancedSearch();
  })

  it('Confirm that you changed pages', ()=>{
    testMethods.changedPageConfirm('http://localhost:3000/advancedsearch')
  })

})