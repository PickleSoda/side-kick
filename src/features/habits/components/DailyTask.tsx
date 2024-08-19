import React from 'react';
import Markdown from 'react-markdown'
import { daily_task } from '../types';


const DailyTask = ({ selectedTask }: { selectedTask: daily_task }) => {
    console.log(selectedTask);
    return (
        <div className='h-[75vh] flex flex-col items-center justify-evenly'>
            <div className='text-xl text-center'>{selectedTask.title}</div>
            <Markdown>{selectedTask.description}</Markdown>
        </div>
    );
};

export default DailyTask;
