document.getElementById('add').addEventListener('click',function(){
var value=document.getElementById('item').value;
if(value) addItemtodo(value);
})

function removeitem(){
	var item=this.parentNode.parentNode;
	var parent=item.parentNode;
	parent.removeChild(item);
}
	
	
function addItemtodo(text){
	var list=document.getElementById('todo');
	var item=document.createElement('li');
	item.innerText=text;
	 
	var buttons=document.createElement('div');
	buttons.classList.add('buttons');
	
	var remove=document.createElement('button');
     remove.innerHTML="   Remove";
	 
	 remove.addEventListener('click',removeitem);
	 
	 buttons.append(remove);
	
	item.append(buttons);
	list.insertBefore(item,list.childNodes[0] );
}

	
	
	