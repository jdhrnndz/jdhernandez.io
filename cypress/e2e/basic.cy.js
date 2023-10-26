describe('HomeBanner test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the name', () => {
    cy.get('hgroup')
    .contains('JD Hernandez');
  })
  it('renders the profile image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
