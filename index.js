function markAsDone = (todos){ 
  let todos = ['Red', 'Green', 'Blue']
  for (let i = 0; i < todos.length; i++) {
    todos[i] = 'done - ' + todos[i]
  }
return todos;
}
                      


