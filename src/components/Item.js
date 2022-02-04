import React from "react";

export class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.handleDelete(this.props.id);
    }

    render() {
        return (
            <li>{this.props.name} <button onClick={this.handleDelete}>Delete</button></li>
        )
    }
}