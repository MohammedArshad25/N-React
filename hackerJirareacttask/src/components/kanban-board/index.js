import React from "react";
import "./index.css"

export default function KanbanBoard(props) {

	const [newTask, setNewTask] = React.useState('');

	const handleNewTask = (e) => {
		setNewTask(e.target.value);
	}

	const handleAddTask = () => {
		if(newTask.length == 0) {
			return;
		}
		setTasks((prevTasks) => [...prevTasks, {name : newTask, stage: 0}])
		setNewTask('');
	}

	let [tasks, setTasks] = React.useState([
		{ name: 'read', stage: 0 },
		{ name: 'gym', stage: 0 },
	])

	let [stagesNames, setStagesNames] = React.useState(['Backlog', 'To Do', 'Ongoing', 'Done']);


	let stagesTasks = [];
	for (let i = 0; i < stagesNames.length; ++i) {
		stagesTasks.push([]);
	}
	for (let task of tasks) {
		const stageId = task.stage;
		stagesTasks[stageId].push(task);
	}

	function segregateTasks (prevTasks,stageIndex ) {
		let otherStageTasks = []

		let currentStageTasks = prevTasks.filter((ele,i)=> {
			if(ele.stage == stageIndex) {
				return ele
			} else {
				otherStageTasks.push(ele);
			}
		} )
		return [currentStageTasks, otherStageTasks];
	}

	const handleDelete = (index,i) => {
		let stageIndex = i;
		let taskIndex = index;

		setTasks((prevTasks)=> {
			let [currentStageTasks, otherStageTasks] = segregateTasks(prevTasks, stageIndex);

			let newCurrentStageTasks = currentStageTasks.filter((_, i) => i !== index);
			let newOriginalTasks = [...otherStageTasks, ...newCurrentStageTasks];
			return newOriginalTasks;
		});
	}

	const handleForward = (index,i, name) => {
		let stageIndex = i;
		let taskIndex = index;

		setTasks((prevTasks)=> {

			let [currentStageTasks, otherStageTasks] = segregateTasks(prevTasks, stageIndex);

			let newCurrentStageTasks = currentStageTasks.map((task, i) => {
				if(i==taskIndex && stageIndex <3 ) {
					return { ...task, stage: task.stage + 1 };
				}
				return task
			});

			let newOriginalTasks = [...otherStageTasks, ...newCurrentStageTasks];
			return newOriginalTasks;
		});
	}


	const handleBackward = (index,i) => {
		let stageIndex = i;
		let taskIndex = index

		setTasks((prevTasks)=> {
			let [currentStageTasks, otherStageTasks] = segregateTasks(prevTasks, stageIndex);

			let newCurrentStageTasks = currentStageTasks.map((task, i) => {
				if(i==taskIndex && stageIndex >0) {
					return { ...task, stage: task.stage - 1 };
				}
				return task
			});

			let newOriginalTasks = [...otherStageTasks, ...newCurrentStageTasks];
			return newOriginalTasks;
		});
	}
	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<section className="mt-50 layout-row align-items-center justify-content-center">
				<input id="create-task-input" type="text" className="large" placeholder="New task name" data-testid="create-task-input" value={newTask} onChange={(e)=>handleNewTask(e)}/>
				<button type="submit" className="ml-30" data-testid="create-task-button" onClick={handleAddTask}>Create task</button>
			</section>

			<div className="mt-50 layout-row">
				{stagesTasks.map((tasks, i) => {
					return (
						<div className="card outlined ml-20 mt-0" key={`${i}`}>
							<div className="card-text">
								<h4>{stagesNames[i] }</h4>
								<ul className="styled mt-50" data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return <li className="slide-up-fade-in" key={`${i}${index}`}>
											<div className="li-content layout-row justify-content-between align-items-center">
												<span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
												<div className="icons">
													<button className="icon-only x-small mx-2" disabled={i== 0} onClick={()=>handleBackward(index,i,task.name)} data-testid={`${task.name.split(' ').join('-')}-back`}>
														<i className="material-icons">arrow_back</i>
													</button>
													<button className="icon-only x-small mx-2"  disabled={i== 3} onClick={()=>handleForward(index,i,task.name)} data-testid={`${task.name.split(' ').join('-')}-forward`}>
														<i className="material-icons">arrow_forward</i>
													</button>
													<button className="icon-only danger x-small mx-2" onClick={()=>handleDelete(index, i)}data-testid={`${task.name.split(' ').join('-')}-delete`}>
														<i className="material-icons">delete</i>
													</button>
												</div>
											</div>
										</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
