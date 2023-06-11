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
}