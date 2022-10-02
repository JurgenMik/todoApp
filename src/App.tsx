import React, {useState, useMemo} from 'react';
import {BsFillSunFill} from 'react-icons/bs';
import {RiMoonFill} from "react-icons/ri";
import Todo from './components/Todo';

function App() {

    interface Todo {
        activity: string,
        completed: boolean,
    }

    const [toDoList, setList] = useState<Todo[]>([]);
    const [theme, setTheme] = useState<string>('Dark')
    const [itemCount, setCount] = useState<number>(0);
    const [filterState, setFilterState] = useState({
        all: false,
        active: false,
        completed: false,
    })
    const [toDo, setToDo ] = useState<Todo>({
        activity: '',
        completed: false,
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setToDo({...toDo, activity : e.target.value});
    }

    const handleClick = () => {
        setList(toDoList.concat(toDo));
        setCount(itemCount + 1);
        const input = document.getElementById('describeTodo') as HTMLInputElement;
        input.value = '';
    }

    const handleClear = () => {
        setList(toDoList.filter((todo : any) => (!todo.completed)));
    }

    const filterAll = () => {
        setFilterState({
            all: true,
            active: false,
            completed: false,
        })
    }

    const filterActive = () => {
        setFilterState({
            all: false,
            active: true,
            completed: false,
        })
    }

    const filterCompleted = () => {
        setFilterState({
            all: false,
            active: false,
            completed: true,
        })
    }

    const handleFilters = () => {
        if (filterState.active) {
            return toDoList.filter(todo => !todo.completed);
        }
        if (filterState.completed) {
            return toDoList.filter(todo => todo.completed);
        }
        return toDoList;
    }

    const filteredList = useMemo(handleFilters, [toDoList, filterState]);

    const LightTheme = () => {
        setTheme('Light');
    }

    const DarkTheme = () => {
        setTheme('Dark');
    }

  return (
    <div className={`w-full h-screen ${theme === 'Dark' ? "bg-slate-800" : "bg-white"}`}>
        <div className="w-full h-1/3 bg-background bg-no-repeat bg-cover">
            <div className="sm:w-1/3 w-4/5 h-full ml-auto mr-auto">
                <div className="w-full h-1/2 flex flex-row items-center">
                    <h1 className="text-5xl text-white tracking-widest font-bold">
                        TODO
                    </h1>
                    {theme === 'Dark'? <BsFillSunFill onClick={LightTheme} className="ml-auto float-right text-white text-3xl" /> :
                        <RiMoonFill onClick={DarkTheme} className="ml-auto float-right text-white text-3xl" />}
                </div>
                <div className={`w-full h-1/5 rounded-md flex items-center -mt-8 ${theme === 'Dark' ? "bg-slate-700" : "bg-white"} `}>
                    <div className="sm:w-1/6 w-1/5 flex justify-center">
                        <span onClick={handleClick} className="w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:ring-0">
                        </span>
                    </div>
                    <input
                        className={`w-5/6 p-4 ml-auto float-right sm:mr-4 mr-2 ${theme === 'Dark' ? "bg-slate-700" : "bg-white"} text-xl text-gray-400`}
                        name="todo"
                        id="describeTodo"
                        onChange={handleChange}
                        placeholder="Create a new todo..."
                    />
                </div>
                <div className={`sm:w-1/3 w-4/5 h-auto ${theme === 'Dark' ? "bg-slate-700" : "bg-white shadow-2xl"} absolute top-30 mt-16 rounded-md`}>
                    <Todo toDoList={toDoList} setList={setList} filteredList={filteredList} setCount={setCount} itemCount={itemCount} theme={theme} />
                    {toDoList.length <= 0 ? null :
                        <div className="w-full h-16 flex items-center justify-center sm:space-x-24 space-x-6 text-gray-500 font-bold">
                            <h1>
                                {itemCount} items left
                            </h1>
                            <div className="flex space-x-4">
                                <h1 onClick={filterAll} className="hover:text-blue-500">
                                    All
                                </h1>
                                <h1 onClick={filterActive} className="hover:text-blue-500">
                                    Active
                                </h1>
                                <h1 onClick={filterCompleted} className="hover:text-blue-500">
                                    Completed
                                </h1>
                            </div>
                            <h1 onClick={handleClear} className="hover:text-blue-500">
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
