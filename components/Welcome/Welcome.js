import React,{useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity,Alert,Image } from 'react-native'



const Welcome = ({navigation}) => {
    
    return (
        <View style={styles.wrapper}>
            
            <View style={{alignItems:'center', marginBottom:20}}>
                <Text> Welcome to Plastic Pollution Tracker</Text>

            </View>
            <Pressable 
                titleSize={20} 
                style={styles.button} 
            > 
                <Text>Log In</Text>
            </Pressable>

            <Pressable 
                titleSize={20} 
                style={styles.button} 
            > 
                <Text>Sign Up</Text>
            </Pressable>
            
            
        </View>
    )
}

const styles=StyleSheet.create({
    wrapper:{
        marginTop:80,
        height:'100%',
        width:'100%'
    },
    
    LogoContainer:{
        alignItems:'center',
        marginTop:60

    },
    
    button:{
        backgroundColor:'#1E90FF' ,
        borderRadius:30,
        alignItems:'center',
        padding:10,
        marginTop:10
    }
})

export default Welcome
