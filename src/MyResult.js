import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyResult = (props) => {

    let myAnswer = props.answer

    // the props.input is the empty string
    if (props.answer == ''){
        myAnswer = ''
    }else {
        myAnswer = '= ' + props.answer
    }


    let [myInputSize, setmyInputSize] = useState(48)
    let [myAnswerSize, setmyAnswerSize] = useState(36)
    // the showAnswer command is true

    useEffect(() => {

        if (props.answerCommand){
            setmyAnswerSize(48)
            setmyInputSize(36)
            myAnswer = props.answer
        }else if (props.answerCommand == false){
            setmyAnswerSize(36)
            setmyInputSize(48)
            myAnswer = props.answer
        }
    

    },[props.answerCommand])

    let styles = StyleSheet.create({
        inputStyling : {
            fontSize : myInputSize,
            color : 'white'
        },
        answerStyling : {
            fontSize : myAnswerSize,
            color : 'white'
        }
    })


    return (
        <View style={props.style}>
            {/* View input */}
            <Text style={styles.inputStyling}>{props.input}</Text>

            {/* View answer */}
            <Text style={styles.answerStyling}>{myAnswer}</Text>
        </View>
    )
}

export default MyResult


