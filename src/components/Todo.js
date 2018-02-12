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
