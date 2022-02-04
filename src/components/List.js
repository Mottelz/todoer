import React from "react";
import {Item} from "./Item";

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>{this.props.items.map(i => <Item key={i.id} name={i.name} id={i.id} handleDelete={this.props.handleDelete}/>)}</ul>
        )
    }
}
