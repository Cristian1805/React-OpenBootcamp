import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'


//En esta parte de importa las hojas de estilos
import '../../styles/task.scss'


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log('Task is going to: ')
        };
    }, [task]);




    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>

            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{task.level}</span>
            </td>

            <td className='align-middle'>
            {/* TODO: Sustituir por iconos */}
                <span>{task.completed}</span>
            </td>

        </tr>



        // <div>

        // <h2 className='task-name'>
        //     Nombre: {task.name}
        // </h2>

        // <h3>
        //     Descripcion: {task.description}
        // </h3>

        // <h4>
        //     Level: {task.level} 
        // </h4>

        // <h5>
        //     This task is: {task.completed ? 'COMPLETED': 'PENDIENTE'}
        // </h5>
            
        // </div>
    );
};


TaskComponent.propTypes = {

    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
