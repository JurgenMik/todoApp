import React from 'react';

function Todo({toDoList, setList, setCount, itemCount, filteredList, theme} : any) {

    const handleClick = (e : React.MouseEvent<HTMLSpanElement>, details : any) => {
        e.preventDefault();
        setList(toDoList.filter((todo : any) => todo.activity !== details.activity).concat({...details, completed : true}));
        setCount(itemCount -1);
    }

    const handleDelete = (e : React.MouseEvent<HTMLSpanElement>, details : any) => {
        setList(toDoList.filter((todo : any) => todo.activity !== details.activity));
        if (!details.completed) {
            setCount(itemCount -1);
        }
    }

    return(
        <div className={`w-full ${theme === 'Dark' ? "text-white" : "text-black"} sm:text-xl text-lg`}>
            {filteredList.map((details : any, index: number) => {
                return(
                   <div className="w-full h-24 ml-auto float-right flex items-center sm:space-x-0 space-x-4 border-b border-gray-600" key={index}>
                       <div className="sm:w-1/6 w-1/5 flex items-center justify-center">
                            <span
                                onClick={e => handleClick(e, details)}
                                className={`w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:ring-0 ${details.completed ? 
                                    "bg-gradient-to-r from-blue-400 to-blue-700 ring-0" : 
                                    null}`}>
                            </span>
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
                )
            })}
        </div>
    );
}

export default Todo;