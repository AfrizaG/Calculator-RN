import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const MyButton = (props) => {
    return (
        <TouchableHighlight style={props.style} onPress={props.onPress}>
            <Text style={styles.textStyling}>{props.name}</Text>
        </TouchableHighlight>
    )
}

export default MyButton

const styles = StyleSheet.create({
    textStyling : {
        color : 'white',
        fontSize : 36
    }
})
