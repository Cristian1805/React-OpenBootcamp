import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'


//En esta parte de importa las hojas de estilos
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log('Task is going to: ')
        };
    }, [task]);

    //Se va a comprobar si se trata de un level o de otro
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
             case LEVELS.BLOCKING:
                return(<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }

    }


    // Funcion retornara una bandera en donde se verifica si el icono esta activado o no
    function taskCompletedIcon(){
        if (task.completed){
            return (<i className='bi-toggle-on' style = {{color : 'green'}}></i>)
        } else{
            return (<i className='bi-toggle-of' style = {{color : 'grey'}}></i>)
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            
            {/* Ejecucion de la funcion que retornara el elemento badge */}
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
 
            <td className='align-middle'>
            

            {/* Ejecucion de la funcion */}
            {taskCompletedIcon()}
    
                <i className='bi-trash' style = {{color : 'tomato'}}></i>
                {/* <span>{task.completed ? 'Completed' : 'Pending'}</span> */}
            </td>

        </tr>
    );
};


TaskComponent.propTypes = {

    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
