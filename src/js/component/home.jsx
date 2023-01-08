import React, { useState } from "react";
import TaskList from "./taskList.jsx";
import Input from "./input.jsx";

const Home = () => {

	let [taskList, setTaskList] = useState([]);

	const addTask = (newTask) => {
		setTaskList([...taskList, newTask])
	}

	const removeTask = (index) => {
		taskList.splice(index, 1);
		setTaskList([...taskList])
	}

    return (
		<div className="text-center">
			<h1>* To Do List *</h1>
			<Input addTask={addTask} taskList={taskList}/>
			<TaskList taskList={taskList} removeTask={removeTask}/>
		</div>
	);
};

export default Home;
