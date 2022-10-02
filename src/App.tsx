import React, {useState} from 'react';
import {BsFillSunFill} from 'react-icons/bs';
import Todo from './components/Todo';

function App() {

    interface Todo {
        activity: string,
    }

    const [todoList , setList] = useState<Todo[]>([]);
    const [todo, setToDO ] = useState<Todo>({
        activity: '',
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setToDO({...todo, activity : e.target.value});
    }

    const handleClick = () => {
        setList(todoList.concat(todo))
        const input = document.getElementById('describeTodo') as HTMLInputElement;
        input.value = '';
    }

  return (
    <div className="w-full h-screen bg-slate-800">
        <div className="w-full h-1/3 bg-background bg-no-repeat bg-cover">
            <div className="sm:w-1/3 w-4/5 h-full ml-auto mr-auto">
                <div className="w-full h-1/2 flex flex-row items-center">
                    <h1 className="text-5xl text-white tracking-widest font-bold">
                        TODO
                    </h1>
                    <BsFillSunFill className="ml-auto float-right text-white text-3xl" />
                </div>
                <div className="w-full h-1/5 bg-slate-700 rounded-md flex items-center -mt-8">
                    <div className="sm:w-1/6 w-1/5 flex justify-center">
                        <span onClick={handleClick} className="w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:ring-0">
                        </span>
                    </div>
                    <input
                        className="w-5/6 p-4 ml-auto float-right sm:mr-4 mr-2 bg-slate-700 text-xl text-gray-400"
                        name="todo"
                        id="describeTodo"
                        onChange={handleChange}
                        placeholder="Create a new todo..."
                    />
                </div>
                <div className="sm:w-1/3 w-4/5 h-auto bg-slate-700 absolute top-30 mt-16 rounded-md">
                    <Todo toDoList={todoList}/>
                    {todoList.length <= 0 ? null :
                        <div className="w-full h-16 flex items-center justify-center sm:space-x-24 space-x-2 text-gray-500 font-bold">
                            <h1 className="hover:text-blue-500">
                                items left
                            </h1>
                            <div className="flex space-x-4 hover:text-blue-500">
                                <h1>All</h1>
                                <h1>Active</h1>
                                <h1>Completed</h1>
                            </div>
                            <h1 className="hover:text-blue-500">
                                Clear Completed
                            </h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
