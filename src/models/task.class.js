import { LEVELS } from "./levels.enum";


export class Task{
    name =  '';
    description = '';
    completed = 'true';
    level = LEVELS.NORMAL;


    constructor (name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.completed = level;
    }
}