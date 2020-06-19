import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Task extends Component {
    state = {
        task: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/task/${id}`);

        this.setState({ task: response.data });
    }

    render() {
        const { task } = this.state;

        return (
            <div className="task-info">
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>{task.status}</p>

                <Link to=''>Voltar</Link>
            </div>
        );
    }
}