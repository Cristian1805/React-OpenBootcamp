import React from 'react';
import {LEVELS} from '../../models/levels.enum.js'
import { Task } from '../../models/task.class';


const TaskListComponent = () => {


    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);





    return (
        <div>


            
        </div>
    );
};

export default TaskListComponent;
