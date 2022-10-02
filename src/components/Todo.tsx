import React from 'react';

function Todo({toDoList} : any) {
    return(
        <div className="w-full text-white sm:text-xl text-lg">
            {toDoList.map((details : any, index: number) => {
                return(
                   <div className="w-full h-24 ml-auto float-right flex items-center sm:space-x-0 space-x-4 border-b border-gray-600" key={index}>
                       <div className="sm:w-1/6 w-1/5 flex items-center justify-center">
                            <span className="w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:ring-0">
                        </span>
                       </div>
                       <div className="w-4/5">
                           {details.activity}
                       </div>
                   </div>
                )
            })}
        </div>
    );
}

export default Todo;