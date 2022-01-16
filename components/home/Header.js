import React from 'react'
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={{uri:'https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2015-700x199.png'}}/>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
                    <AntDesign name="plussquareo" size={24} color="white" style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="heart-outlined" size={24} color="white" style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.readableBadge}>
                        <Text style={styles.unreadableText}>2</Text>
                    </View>
                    <AntDesign name="message1" size={24} color="white" style={styles.icons} />
                </TouchableOpacity>
                
                
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20
    },
    logo:{
        height:100,
        width:100,
        resizeMode:"contain"
    },
    iconContainer:{
        color:'white',
        flexDirection:'row'
    },
    icons:{
        width:30,
        height:30,
        marginLeft:10,
       
    },
    readableBadge:{
        backgroundColor:"red",
        alignItems:"center",
        position:"absolute",
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        justifyContent:"center",
        zIndex:100
    },
    unreadableText:{
        color:"white",
        fontWeight:"600"
    }
})
export default Header;
