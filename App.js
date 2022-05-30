import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function App() {

  const buttons= ['AC', 'DEL', '%', '/', '7','8','9','*','4','5','6','-','3','2','1','+','0','.','=']


    const [inicioNumber, setInicioNumber] = useState("")
    const [finalNumber, setFinalNumber] = useState("")

    const [resultado, setResultado] = useState("")

    


    function calculator(){
      const splitNumbers = inicioNumber.split('')
      const firstNumber = parseFloat(splitNumbers[0])
      const finalNumber = parseFloat(splitNumbers[2])
      const operador = splitNumbers[1]
      

      switch(operador) {
        case "+":
          setInicioNumber((firstNumber + finalNumber))
          return
         
        case "-":
          setInicioNumber((firstNumber - finalNumber))
          return
        
       case "*":
         setInicioNumber((firstNumber * finalNumber))
         return
       
       case "/":
         setInicioNumber((firstNumber / finalNumber))
       return
      }
    }
    
    function hendleInput (buttonPressed) {
      console.log(buttonPressed)
      if((buttonPressed === "+" | buttonPressed === "-" | buttonPressed === "/" | buttonPressed ==="*")){
        setInicioNumber(inicioNumber + "" + buttonPressed + "")
        return
      }
      if((buttonPressed === "DEL")){
        setInicioNumber(inicioNumber.substring(0, (inicioNumber.length -1)))
        return
      }
      if((buttonPressed === "AC")) {
        setFinalNumber("")
        setInicioNumber("")
        return
      }
      if((buttonPressed === "=")) {
        setFinalNumber(inicioNumber + " = ")
        calculator()
        if ('+/-') {
          return
        }
         
      }
        setInicioNumber(inicioNumber + buttonPressed)
  }


  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{finalNumber}</Text>
        <Text style={styles.resultText}>{inicioNumber}</Text>
     {/*   <Text style={{fontSize:20, margin: 10, color:'white'}}>{resultado}</Text> */}
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          <TouchableOpacity  onPress={()=> hendleInput(button)} key={button} style={styles.button} >
            <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  result:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    width:'100%',
    height:300,
    backgroundColor:'black',
  },
  buttons:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  button: {
    flex:2,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'white',
    minHeight: 80,
    minWidth:80,
  },
  textButton: {
    color: '#5b5b5b',
    fontSize:35,
  },
  historyText:{
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
    color: 'white',
  },
  resultText: {
    margin: 10,
    fontSize: 40,
    color: 'white',
  }
}) 

