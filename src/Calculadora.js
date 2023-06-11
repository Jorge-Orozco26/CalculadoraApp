import React, {useState} from 'react';
import { View,
        Text,
        TouchableOpacity,
        StyleSheet
    } from 'react-native';
import { create } from 'mathjs';

const math = create(all);

const Calculadora = () => {
    const [resultado, setResultado] = useState('');
}
export default Calculadora;

const handleButtonPress =(value) => {
    setResultado(resultado + value);
};

const CalcularResultado =() => {
    try{
        const evaluatedResult = math.evaluate(resultado);
        setResultado(evaluatedResult.toString());
    } catch (error){
        setResultado('Error');
    }
};

const limpiarResultado = () => {
    setResultado('');
};








const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultContainer:{
        marginBottom: 20,
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: 300,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius:  5,
        margin: 4,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});