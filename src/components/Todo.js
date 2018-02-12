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
        //Define the type of the property
        //To test this functionalitty, you just need to call a Todo Component, passing a title that's is not of the type stringtitle que não seja do tipo string. E.g.: <Todo title={5} />
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
