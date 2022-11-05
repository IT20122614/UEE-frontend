import React from 'react'
import { StyleSheet, View } from 'react-native'
import Comment from '../components/comments/Comment'
import Screen from '../components/common/Screen'

export default function CommentsScreen({ route }) {
  const post=route.params.post
  return (
    <Screen>
      <View style={{display:"flex",alignItems:"center"}}>
        {/*<Comment comment={post.comments[0]} />*/}
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
  
}
})