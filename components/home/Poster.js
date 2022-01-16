import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { POSTS } from '../../data/Posts'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Poster = ({post}) => {
    return (
        <View style={{marginBottom:30}}>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <View style={{marginHorizontal:15, marginTop:10}}>
            <PostFooter/>
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentSection post={post}/>
            <Comments post={post}/>
            </View>
        </View>
    )
}

const PostHeader =({post})=>(
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:5, alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={{uri:post.profile_picture}} style={styles.story}/>
            <Text style={{color:'white', marginLeft:5, fontWeight:'100'}}>{post.user} </Text>
        </View>
        <Text style={{color:'white'}}>...</Text>
    </View>
)

const PostImage=({post})=>(
        <View style={{width:'100%',height:450}}>
            <Image source={{uri:post.imageurl}} style={{height:'100%',resizeMode:'cover'}}/>
        </View>
)

const PostFooter=({post})=>(
    <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" style={{marginHorizontal:5}}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <Feather name="message-circle" size={24} color="white" style={{marginHorizontal:5}}/>
        </TouchableOpacity>
        
        <TouchableOpacity>
         <MaterialCommunityIcons name="send" size={24} color="white" style={{transform: [{ rotate: '330deg'}],marginHorizontal:5}}/>
        </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity>
            <Feather name="bookmark" size={24} color="white" />    
            </TouchableOpacity>
        </View>

    </View>
)

const Likes=({post})=>(
    <View style={{marginTop:4}}>
    <Text style={{color:'white',fontWeight:'600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption=({post})=>(
    <View style={{marginTop:5,flexDirection:'row'}}>
    <Text style={{color:'white',fontWeight:'bold'}}>{post.user} </Text>
    <Text style={{color:'white',fontWeight:'100'}}>{post.caption.toLocaleString('en')}</Text>
    </View>
)

const CommentSection=({post})=>(
    <View style={{marginTop:5}}>
        {!!post.comments.length &&(
    <Text style={{color:'grey'}}>
        View {post.comments.length>1?'all':' '} {post.comments.length} {post.comments.length>1?'comments':'comment'}</Text>
        )}
    </View>
)

const Comments=({post})=>(
    <>
    {post.comments.map((comment,index)=>(
        <View key={index}>
            <Text style={{color:'white', marginTop:5}}>
                <Text style={{color:'white'}}>
                    {comment.user+':'} 
                </Text>
                    {' '+comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const styles=StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:"blue"
    }
})

export default Poster
