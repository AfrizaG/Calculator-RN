import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

import MyButton from './src/MyButton'
import MyResult from './src/MyResult'

const App = () => {

  let [input,setInput] = useState('')
  let [myEval,setMyEval] = useState('')
  const operator = ['÷','×','+','-',',']

  const [answer, setAnswer] = useState('')
  const [answerCommand, setAnswerCommand] = useState(false)

  function addState(inputVal, myEvalVal) {
    setInput(input + inputVal)
    setMyEval(myEval + myEvalVal)
  }

  function clearState(){
    setInput('')
    setMyEval('')
    setAnswer('')
    setAnswerCommand(false)
  }

  function backSpace(){
    setInput(input.slice(0,-1))
    setMyEval(myEval.slice(0,-1))
  }

  function getAnswer(){
    setAnswer( eval(myEval) )
  }

  function showAnswer() {
    setAnswerCommand(true)
  }

  function comingSoon(){
    Alert.alert("Coming Soon","Fitur ini masih dalam tahap pengembangan",[{text:"Oke"}])
  }

  useEffect( () => {
    
    // operator doesn't include the last of input characters
    if ( !operator.includes( input.slice(-1) ) ) {
      if ( input != ''){
        getAnswer()
      }
    }else {
      setAnswer('')
    }

    // The input is empty string
    if (input == ''){
      setAnswer('')
    }

    setAnswerCommand(false)

  },[input])

  return (
    <View style={styles.bodyStyling} >
      
      {/* Show result */}
      <MyResult 
        style={styles.MyResultStyling}
        input={input}
        answer= {answer}
        answerCommand={answerCommand}
      />

      {/* The place of buttons */}
      <View style={{flex: 2,backgroundColor:'green'}}>

      <View style={styles.rowButtonStyling} >
        <MyButton name='C' onPress={()=> clearState()} style={styles.MyButtonStyling} />
        <MyButton name='<' onPress={()=> backSpace()} style={styles.MyButtonStyling} />
        <MyButton name='%' onPress={() => comingSoon()} style={styles.MyButtonStyling} />
        <MyButton name='÷' onPress={()=> addState('÷','/')} style={styles.MyButtonStyling} />
      </View>

      <View style={styles.rowButtonStyling} >
        <MyButton name='7' onPress={()=> addState('7','7')} style={styles.MyButtonStyling} />
        <MyButton name='8' onPress={()=> addState('8','8')} style={styles.MyButtonStyling} />
        <MyButton name='9' onPress={()=> addState('9','9')} style={styles.MyButtonStyling} />
        <MyButton name='×' onPress={()=> addState('×','*')} style={styles.MyButtonStyling} />
      </View>

      <View style={styles.rowButtonStyling} >
        <MyButton name='4' onPress={()=> addState('4','4')} style={styles.MyButtonStyling} />
        <MyButton name='5' onPress={()=> addState('5','5')} style={styles.MyButtonStyling} />
        <MyButton name='6' onPress={()=> addState('6','6')} style={styles.MyButtonStyling} />
        <MyButton name='-' onPress={()=> addState('-','-')} style={styles.MyButtonStyling} />
      </View>

      <View style={styles.rowButtonStyling} >
        <MyButton name='1' onPress={()=> addState('1','1')} style={styles.MyButtonStyling} />
        <MyButton name='2' onPress={()=> addState('2','2')} style={styles.MyButtonStyling} />
        <MyButton name='3' onPress={()=> addState('3','3')} style={styles.MyButtonStyling} />
        <MyButton name='+' onPress={()=> addState('+','+')} style={styles.MyButtonStyling} />
      </View>

      <View style={styles.rowButtonStyling} >
        <MyButton name='M' onPress={()=>comingSoon()} style={styles.MyButtonStyling} />
        <MyButton name='0' onPress={()=> addState('0','0')} style={styles.MyButtonStyling} />
        <MyButton name=',' onPress={()=> addState(',','.')} style={styles.MyButtonStyling} />
        <MyButton name='=' onPress={()=> showAnswer()} style={styles.MyButtonStyling} />
      </View>
      
      


      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  bodyStyling : {
    backgroundColor : '#292929',
    flex : 1,
  },
  MyResultStyling : {
    backgroundColor : 'blue',
    flex : 1,
    justifyContent : 'flex-end',
    alignItems : 'flex-end'
  },
  rowButtonStyling : {
    flex : 1,
    flexDirection : 'row'
  },
  MyButtonStyling : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    borderWidth : 1
  }
})
