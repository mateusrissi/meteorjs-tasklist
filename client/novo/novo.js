Template.novo.events({

	"submit form": function(e, template) {
		e.preventDefault();

		var input = $("#tarefa");
		var nome = input.val();sfbsjkfkse

		//Tarefas.insert({nome: nome, data: new Date()});
		Meteor.call("adiciona", {nome: nome});
		input.val("");
		sefsefse
	}
});
