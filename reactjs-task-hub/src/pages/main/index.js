import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';

import "./styles.css"

export default class Main extends Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = async () => {
        const response = await api.get("/task");

        this.setState({tasks: response.data})
    };

    render() {
        const { tasks } = this.state;

        return (
            <div className="task-list">
                {tasks.map(task => (
                    <article key={task.id}>
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>
                        <p>{task.status}</p>

                        <Link to={`/tasks/${task.id}`}>Detalhes</Link>
                    </article>
                ))}
            </div>
        );
    }
}