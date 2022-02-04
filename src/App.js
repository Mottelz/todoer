import './App.css';
import './components/Item'
import React from "react";
import {List} from './components/List'
import {ItemForm} from "./components/ItemForm";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(itemName) {
      if(this.state.items.length > 0) {
          let newState = this.state;
          newState.items.push({id: this.state.items.at(this.state.items.length-1).id + 1, name: itemName});
          this.setState(newState);
      } else {
          let newState = {items: [{id: 0, name: itemName}]};
          this.setState(newState);
      }

  }

  removeFromList(itemId) {
      let newState = {items: this.state.items.filter(i => i.id !== itemId)};
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
