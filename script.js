
let arrayList = []



const dadosSalvos = localStorage.getItem('id')

if(dadosSalvos){
  arrayList = JSON.parse(dadosSalvos)
}



function addList(){

 let ativi = document.getElementById("addList").value;

 let objectAtividade = {
  id:Date.now(),
  texto: ativi,
  concluido: false 
}

// VALIDAR O INPUT DE INSCREVER A ATIVIDAE
if(ativi !=''){

 // arrayList.push(ativi)

 arrayList.push(objectAtividade);

  }
  else {
alert("digite aluma atividade antes de clicar em adicionar ")
}
savarNolocalStorage()
mostrarLista()

}

function savarNolocalStorage(){
  localStorage.setItem('id',JSON.stringify(arrayList));

}


function mostrarLista(){

  let result = document.getElementById("result")

  // para apagar e poder atualizar o resultado
  result.innerHTML = "" 

  if(arrayList.length == 0){
    result.innerHTML = "* sua lista está vazia"
   
  }
 
// for(let i= 0 ; i < arrayList.length ; i ++){
    
  // result.innerHTML +="<li> " + arrayList[i] + "<button onclick='remover("+i+")'> X </button>   </li> "

  arrayList.forEach(percor)

function percor(item,indice,arrayList){
     
let estilo = ""

  if(arrayList[indice].concluido){
    estilo = "concluida"
  }

  result.innerHTML +=
    "<li > <span class='"+estilo+"'>"
        + arrayList[indice].texto +
      "</span>  <i onclick='marcar("+indice+")' class='fa-regular fa-square-check check'></i>   <i onclick='editar("+arrayList[indice].id+")' class='fa-solid fa-pen edit'></i>  <i onclick='remover(" + arrayList[indice].id + ")' class='fa-regular fa-trash-can trash'></i>    </li>    "
 
    }
    }

// função de remover atividade
function remover(id){
  // remove o indice do array list 
 // arrayList.splice(indice,1);

 arrayList=  arrayList.filter(list=> list.id !==id)


savarNolocalStorage()
mostrarLista()
}

 // função para editar a tarefa 
function editar(id){

  let editar = document.getElementById("editar")

  editar.innerHTML = '<input class="form-control" type="text" name="" id="edit" placeholder="Edit task..."></input> <button class="btn confirm" onclick= "confirmar('+id+')"> confirmar </button>'

let edit = ''
 
}


// função para confirmar a tarefa feita
 function confirmar(id){

  edit = document.getElementById("edit").value
 
  // para encontrar o objeto com a mesma id 
  let tarefa = arrayList.find(t=> t.id === id)

  
// para nao entrar nada sem ser digitado
 if(edit !== ''){

  tarefa.texto = edit

 }else {
  alert("digite a tarefa")
 }
 


  savarNolocalStorage();
  mostrarLista();
  location.reload();
 
 

}


 

// função para marcar como concluida
 function marcar(indice){

   
  arrayList[indice].concluido = !arrayList[indice].concluido 
  
  savarNolocalStorage()
  mostrarLista()

 
 }

 