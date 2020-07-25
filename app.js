

var list=document.getElementById('list')


function addTodo(){
    var todo_item=document.getElementById('to _item')
    
    var li=document.createElement('li')
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    var delbtn=document.createElement('button')
    var delText=document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onClick","deleteItem(this)")
    delbtn.appendChild(delText)
 
    var editbtn=document.createElement('button')
    var editText=document.createTextNode("EDIT")
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onClick","editItem(this)")
    editbtn.appendChild(editText)

    
    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li)
    todo_item.value=""
 
    console.log(li)
 
}
function deleteItem(e){
    e.parentNode.remove();

    

}
function deleteAll(){
    list.innerHTML=""
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;

    var editValue=prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue=editValue
     

}
