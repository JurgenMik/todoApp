import React from 'react';
import {DragDropContext, Droppable,Draggable} from '@hello-pangea/dnd';
import axios from 'axios';

function Todo({toDoList, setList, setCount, itemCount, filteredList, theme} : any) {

    const handlePUT = (e : React.FormEvent<HTMLFormElement>, details : any) => {
        e.preventDefault();
        axios.put(`http://localhost:3002/todo/${details._id}`,
        {
                completed: true,
            }).then(response => {
                setList(toDoList.filter((todo : any) => todo.activity !== details.activity).concat(response.data.todo));
        }).catch(error => {
            console.log(error);
        })
        if (!details.completed) {
            setCount(itemCount -1);
        }
    }

    const handleDelete = (e : React.MouseEvent<HTMLSpanElement>, details : any) => {
        e.preventDefault();
        axios.delete(`http://localhost:3002/todo/${details._id}`)
            .then(response => {
                setList(toDoList.filter((todo : any) => todo.activity !== response.data.todo.activity));
            }).catch(error => {
                console.log(error);
            })
        if (!details.completed) {
            setCount(itemCount -1);
        }
    }

    const handleOnDragEnd = (result : any) => {
        if (!result.destination) return;
        const items = Array.from(filteredList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setList(items);
    }

    return(
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todoItems">
                {(provided) => (
                <div className={`w-full ${theme === 'Dark' ? "text-white" : "text-black"} sm:text-xl text-lg`} {...provided.droppableProps} ref={provided.innerRef}>
                    {filteredList.map((details : any, index: number) => {
                        return (
                           <Draggable draggableId={details.activity} index={index} key={index}>
                               {(provided) => (
                               <div className="w-full h-24 ml-auto float-right flex items-center sm:space-x-0 space-x-4 border-b border-gray-600" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                   <div className="sm:w-1/6 w-1/5 flex items-center justify-center">
                                       <form onSubmit={e => handlePUT(e, details)}>
                                           <button
                                               type='submit'
                                               className={`w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:ring-0 ${details.completed ?
                                                   "bg-gradient-to-r from-blue-400 to-blue-700 ring-0" :
                                                   null}`}>
                                           </button>
                                       </form>
                                   </div>
                                   <div className={`w-4/5 ${details.completed ? "text-gray-500 line-through" : null}`}>
                                       {details.activity}
                                       <span
                                           onClick={e => handleDelete(e, details)}
                                           className="float-right sm:mr-0 mr-8 text-gray-500">
                                           X
                                       </span>
                                   </div>
                               </div>
                               )}
                           </Draggable>
                        )
                    })}
                    {provided.placeholder}
                </div>
                    )}
            </Droppable>
        </DragDropContext>
    );
}

export default Todo;