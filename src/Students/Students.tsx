import React from 'react';
import {DataPropsType} from "../App";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export type StudentsPropsType = {
    data: DataPropsType
}

export function Students(props: StudentsPropsType) {
    return (
        <div className="App">
            <div>
            <div>
                <h3>{props.data.title}</h3>
            </div>
            <div>
                <div>
                    <ul>
                        {props.data.tasks.map((el) => {
                            return (<li key={el.taskId}><span>{el.title}</span></li>)
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <div>
                    <select>
                        {props.data.students.map((x,y) =>{
                            return(<option key={y}>{x}</option>)
                        })}
                    </select>
                </div>
            </div>
            </div>
        </div>
    );
}