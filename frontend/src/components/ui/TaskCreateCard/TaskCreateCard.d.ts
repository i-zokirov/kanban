import React from 'react';
interface TaskCreateCardProps {
    className?: string;
    style?: React.CSSProperties;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur: React.ChangeEventHandler<HTMLInputElement>;
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}
declare const TaskCreateCard: React.FC<TaskCreateCardProps>;
export default TaskCreateCard;
