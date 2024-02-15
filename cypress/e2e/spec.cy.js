describe('Sipariş Uygulaması Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('Anasayfadaki butonların hepsi sipariş formunu açıyor mu', () => {
    const buttons = [
      'order-button-1',
      'order-button-2',
      'order-button-3',
      'order-button-4'
    ];

    buttons.forEach(button => {
      cy.get(`[data-cy=${button}]`).click(); 
      cy.url().should('include', '/order'); 
      cy.visit('http://localhost:5173/');
    });
  });

  it('İsim alanına metin girilebiliyor mu', () => {
    cy.get('[data-cy=order-button-1]').click()
    const enteredName = 'Oguz';
    cy.get('[data-cy=name]').type(enteredName);
    cy.get('[data-cy=name]').should('have.value', enteredName);
  });

  
});

