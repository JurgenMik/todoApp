import React from 'react';
import {BsFillSunFill} from 'react-icons/bs'


function App() {
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
                <div className="w-full h-1/5 bg-slate-700 rounded-md flex items-center">
                    <div className="sm:w-1/6 w-1/5 flex justify-center">
                        <span className="w-8 rounded-full ring-2 ring-gray-500 p-5 sm:ml-0 ml-2">
                        </span>
                    </div>
                    <input
                        className="w-5/6 p-4 ml-auto float-right sm:mr-4 mr-2 bg-slate-700 text-xl text-gray-400"
                        name="todo"
                        placeholder="Create a new todo..."
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
