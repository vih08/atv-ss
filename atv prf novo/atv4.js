/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/
let tarefas = []
for (let i = 0; i < 3; i++) {
    let tarefa = prompt("Digite uma tarefa:")
    tarefas.push(tarefa)
}

tarefas.splice(1, 1, "ligar para o médico")
console.log("Lista de Tarefas Atualizada:", tarefas)


