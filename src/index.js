import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Fazer café' },
      { id: 2, title: 'Estudar GoNative' }
    ]
  };
  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), title: 'Novo todo' }]
    });
  }
  componentWillMount() {
    /*  Called when the component will mount, is not recommended to do changes in the state,
        or API calls in this method.
    */
  }
  componentDidMount() {
    /*  Better place to do API calls, get data from other services, or other changed to be displayed
        as soon as the component will be rendered.
    */
  }
  componentWillReceiveProps(props) {
    /*  Every time a props is changed this method is called, and in this methos you have the both states of the props.
        The initial value and the changed value.
    */
  }
  shouldComponentUpdate(nextProps, nextState) {
    /*  Every time a props or a state is updated, with this method you can check if the Component need to be rendered.
        This method return a boolean value.
    */
  }
  componentWillUpdate(newProps, newState) {
    /*  Called  after the shoudComponentUpdate method, to do some adjusts in the props or in the state of the component
        to display in the render method.
    */
  }
  componentWillUnmount() {
    /*  This method is called before the component will be removed from the screen. This is the ideal place to undo the
        things we did in the componentWillMount method.
    */
  }
  componentDidCatch(error, info) {
    /*  This method is used to catch js exceptions, and treat this exceptions. Used to display alerts and other
        feedback's errors to user.
    */
  }
  render() {
    //  Called after componentWillMount and every time the state or the props of the component did changed.
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.title} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
        {/*<View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10
  }
});
