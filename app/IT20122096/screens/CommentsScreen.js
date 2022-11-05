import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Comment from '../components/comments/Comment'
import Screen from '../components/common/Screen'

export default function CommentsScreen({ route }) {
  const post = route.params.post;
  const comments = [...post.comments]
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          {comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop:20
  },
});