describe('Cadastro', ()=> {
	it('Usuário deve se tornar um entregador', ()=> {
		cy.viewport(1440, 900 );
		cy.visit('https://buger-eats.vercel.app');
		
		cy.get('a[href="/deliver"]').click();
		cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas'); //ChekcPoint

		var entregador = {
			nome: 'Fernando Papito',
			cpf: '00000014141',
			email: 'papito@hotmail.com',
			whatsapp: 11999999999
		}

		cy.get('input[name="name"]').type(entregador.nome);
		cy.get('input[name="cpf"]').type(entregador.cpf);
		cy.get('input[name="email"]').type(entregador.email);
		cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
		
	});
});