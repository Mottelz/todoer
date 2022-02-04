import React from "react";
import {Item} from "./Item";

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: this.props.items };
    }

    render() {
        return (
            <ul>{this.state.items.map(i => <Item key={i.id} name={i.name} id={i.id} handleDelete={this.props.handleDelete}/>)}</ul>
        )
    }
}
