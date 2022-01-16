import React from 'react'
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native'
import  {Users}  from '../../data/Users'


const Stories = () => {
    return (
        <View style={{marginBottom:13}}>
            <ScrollView horizontal showhorizontalIndex={false}>
                {Users.map((story,index)=>(
                    <View key={index} style={{alignItems:"center"}}>
                        <Image source={{uri:story.image}} style={styles.story}/>
                    <Text style={{color:'white'}}> {story.user.length>6? story.user.slice(0,5).toLowerCase() +"..." : story.user.toLocaleLowerCase()} </Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:"red"
    }
})

export default Stories
