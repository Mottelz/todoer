import React from "react";

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDone: false};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.handleDelete(this.props.id);
    }

    handleDone(e) {
        e.preventDefault();
        this.setState({isDone: true})
    }

    render() {
        return (
            <li className={this.state.isDone ? 'done' : ''}>
                {this.props.name}
                <button onClick={this.handleDelete}>Delete</button>
                <button onClick={this.handleDone}>Done</button>
            </li>
        )
    }
}