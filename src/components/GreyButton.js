import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const GreyButton = () => {
  return (
    <TouchableOpacity style={styles.main}>
        <Image style={{height: 40, width: 40}} source={require("../images/google.png")}/>
        <Text style={{color: 'grey', fontSize: 17, fontWeight: '600', alignSelf: 'center'}}>Login with Google</Text>
        <View></View>
    </TouchableOpacity>
  )
}

export default GreyButton

const styles = StyleSheet.create({
    main:{
        flexDirection: 'row', 
        backgroundColor:'#e8e8e8', 
        borderRadius: 8,
        paddingVertical: 6,
        justifyContent: 'space-evenly'
    }
})