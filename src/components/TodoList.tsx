import React from 'react'
import { Todo } from '../models/models';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    CompletedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, CompletedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`} 
            ref={provided.innerRef}
            {...provided.droppableProps}>  
              <span className="todos__heading">Active Tasks</span>
              {todos?.map((todo, index)=> (
                <SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            ))}
            {provided.placeholder}
      </div>
          )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? "dragcomplete" : "remove"}`} 
            ref={provided.innerRef}
            {...provided.droppableProps}>
              <span className="todos__heading">Completed Tasks</span>
              {CompletedTodos?.map((todo, index)=> (
                <SingleTodo index={index} todo={todo} todos={CompletedTodos} key={todo.id} setTodos={setCompletedTodos}/>
            ))}
            {provided.placeholder}
        </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList