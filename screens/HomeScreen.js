import React from 'react'
import{SafeAreaView,Text,StyleSheet, ScrollView} from 'react-native'
import Header  from '../components/home/Header'
import Poster from '../components/home/Poster'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/Posts'
import BottomTabs,{bottomTabIcons} from '../components/BottomTabs'

const HomeScreen=({navigation})=> {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Stories/>
            <ScrollView>
                {POSTS.map((post,index)=>(
                    <Poster post={post} key={index}/>
                ))}
            
            </ScrollView>
            <BottomTabs icons={bottomTabIcons}/>
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex:1
    },

}) 
export default HomeScreen