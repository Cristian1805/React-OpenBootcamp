import React from 'react';
import {LEVELS} from '../../models/levels.enum.js'
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {


    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);

    // const changeState = (id) => {
    //     console.log('TODO: camibiar el estado de una tarea');
    // }

    return (
        <div>
            <div>
                <h1> Your Taks:</h1>
            </div>
            {/* Aplicar un map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
