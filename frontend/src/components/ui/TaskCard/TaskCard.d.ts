import React from 'react';
import { ITask } from '../../../interfaces';
interface TaskCardProps {
    innerRef: React.Ref<HTMLDivElement>;
    task: ITask;
    [x: string]: any;
}
declare const TaskCard: React.FC<TaskCardProps>;
export default TaskCard;
