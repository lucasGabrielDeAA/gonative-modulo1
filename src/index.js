import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

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
  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.title} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
