import './App.css';
import './components/Item'
import React from "react";
import {List} from './components/List'
import {ItemForm} from "./components/ItemForm";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [
            {id: 0, name: "Milk"},
            {id: 1, name: "Eggs"},
            {id: 2, name: "Ham"},
            {id: 3, name: "Bread"},
        ]};
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(itemName) {
      this.setState((state) => {
          state.items.push({id: state.items.at(state.items.length-1).id + 1, name: itemName});
          return state;
      });
  }

  removeFromList(itemId) {
      let newState = {items: this.state.items.filter(i => i.id != itemId)};
      this.setState(newState);
  }

  render() {
    return (
        <div>
          <h1>To Do List</h1>
          <ItemForm handleSubmit={this.addToList}/>
          <List  items={this.state.items} handleDelete={this.removeFromList}/>
        </div>
    )
  }
}

export default App;
