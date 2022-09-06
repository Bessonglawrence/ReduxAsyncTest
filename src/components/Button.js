import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({buttonText,onPress, backgroundColor}) => {
  return (
    <View style={styles.main}>
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.buttonText]}>{buttonText}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({

    main:{
        backgroundColor: '#1393ec',
        paddingVertical: 11,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 8
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})