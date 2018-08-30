const add_the_handlers = function(nodes){
  for(let i = 0; i < nodes.length; ++i){
   nodes[i].onclick = function(ev){ alert(i); };
  }
}

add_the_handlers(document.querySelectorAll('.box'));
