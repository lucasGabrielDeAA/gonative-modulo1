import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

});

class Todo extends Component {
    static defaultProps = {
        title: 'Todo standard title'
    };
    static propTypes = {
        //Define o tipo da propriedade e se ela é obrigatória.
        //Para teste, basta invocar um component do tipo Todo.js, passando um title que não seja do tipo string. e.g.: <Todo title={5} />
        title: PropTypes.string.isRequired
    };
    
    render() {
        return (
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

export default Todo;
