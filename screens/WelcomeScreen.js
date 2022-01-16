import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import Welcome from '../components/Welcome/Welcome'


const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.LogoContainer}>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCIc-ksIXJRPY7a_Z5_0Zf6RwPH9g3Pn-Gw&usqp=CAU', height:100, width:100}}/>
            </View>
            <Welcome navigation={navigation}/>
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        backgroundColor:'#50C878',
        flex:1,
        paddingTop:50,
        paddingHorizontal:12

    },
    LogoContainer:{
        alignItems:'center',
        marginTop:60

    }
})
export default WelcomeScreen