import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 24
    },

});

const Todo = ({ title }) => (
    <View>
        <Text style={styles.text}>{title}</Text>
    </View>
);

Todo.defaultProps = {
    title: 'Todo standard title'
};
Todo.propTypes = {
    //Define the type of the property
    //To test this functionalitty, you just need to call a Todo Component, passing a title that's is not of the type stringtitle que não seja do tipo string. E.g.: <Todo title={5} />
    title: PropTypes.string.isRequired
};

export default Todo;
