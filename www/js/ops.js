// JavaScript Document
function gravar(){

	var email = document.getElementById('email').value;
	var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('telefone').value;
	var mensagem = document.getElementById('mensagem').value;

	//window.alert(email+", " + nome + ", " + nascimento);

	gravadb(email, nome, telefone, mensagem);
}		

function atualizar(){

	var email = document.getElementById('email').value;
	var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('telefone').value;
	var mensagem = document.getElementById('mensagem').value;

	//window.alert(email+", " + nome + ", " + nascimento);

	atualizadb(email, nome, telefone, mensagem);
}

function gravadb(email, nome, telefone, mensagem){

	var db = firebase.database().ref();

	db.child(mail).set({

		Email: email,
		Nome: nome,
		Telefone: telefone,
		Mensagem: mensagem


	})

}

function atualizar(){

	var email = document.getElementById('email').value;
	var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('telefone').value;
	var mensagem = document.getElementById('mensagem').value;

	//window.alert(email+", " + nome + ", " + nascimento);

	atualizadb(email, nome, nascimento);
}

function atualizadb(mail, name, birth){

	var outro = {

		Email: email,
		Nome: nome,
		Telefone: telefone,
		Mensagem: mensagem
	};

	var index = firebase.database().ref().child(mail).key;

	var dados = {};
	dados[index] = outro;

	return firebase.database().ref().update(dados);


}

function apagar(){

	var email = document.getElementById('email').value;

	apagadb(email);
}

function pagadb(mail){

	return firebase.database().ref().child(mail).remove();
}