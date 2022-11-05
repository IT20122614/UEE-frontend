import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../components/common/Screen";
import colors from "../config/colors";
import { translate } from "../components/common/translator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatGrid } from "react-native-super-grid";
import AppForm from "../components/common/AppForm";
import AppFormField from "../components/common/AppFormField";
import * as Yup from "yup";

export default function SelectedPost({ navigation,route }) {
  const post = route.params.item;
  const cont = [...post.contributors];
  const list = cont.map((c) => c.name);
  const validationSchema = Yup.object().shape({
    comment:Yup.string()
  });

const handleSubmit = (value) => {
  navigation.navigate(routes.LOGIN);
};
  return (
    <Screen>
      <ScrollView verticle>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={post.image} style={styles.image} />
          </View>
          <View style={styles.detailsContainer}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={styles.details}>
                <View style={styles.items}>
                  <Text style={styles.titleText}>{translate("Place")}</Text>
                  <Text style={styles.titleText}>{translate("Date")}</Text>
                </View>
                <View style={styles.items}>
                  <Text style={styles.contentText}>{post.campaign.place}</Text>
                  <Text style={styles.contentText}>{post.campaign.date}</Text>
                </View>
              </View>
              <View style={styles.icons}>
                <View style={styles.like}>
                  <MaterialCommunityIcons
                    name="cards-heart"
                    size={33}
                    color={colors.primary}
                  />
                  <Text style={styles.contentText}>5</Text>
                </View>
                <View style={styles.comment}>
                  <AntDesign name="message1" size={30} color={colors.primary} />
                  <Text style={styles.contentText}>12</Text>
                </View>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.titleText}>{translate("Description")}</Text>
              <Text style={[styles.contentText, { marginLeft: 10 }]}>
                {post.description}
              </Text>
              <Text style={styles.titleText}>{translate("Contributors")}</Text>
              <ScrollView horizontal scrollEnabled={false}>
                <FlatGrid
                  itemDimension={130}
                  data={list}
                  renderItem={({ item }) => <Text>{item}</Text>}
                />
              </ScrollView>
            </View>

            <View>
              <View style={styles.commentbox}>
                <View style={styles.commenttitle}>
                  <Text style={[styles.titleText, { padding: 5 }]}>
                    {translate("Comments")}
                  </Text>
                  <Text style={[{ padding: 5, color: colors.primary }]} onPress={()=>{navigation.navigate(routes.COMMENTS,{post})}}>
                    {post.commentsCount + " "}
                    {translate("Comments").toLowerCase() + " > "}
                  </Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <AppForm
                    initialValues={{
                      comment: "",
                    }}
                    onSubmit={(values) => {
                      handleSubmit(values);
                    }}
                    validationSchema={validationSchema}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <AppFormField
                        maxLength={255}
                        name="comment"
                        multiline
                        numberOfLines={4}
                        height={60}
                        width={290}
                      />
                      <MaterialCommunityIcons
                        name="send"
                        size={33}
                        color={colors.primary}
                        style={{ marginLeft: 10 }}
                      />
                    </View>
                  </AppForm>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imageContainer: {
    flex: 1.3,
  },
  image: {
    width: "94%",
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
    marginBottom: 5,
    position: "relative",
  },
  detailsContainer: {
    flex: 2,
    padding: 15,
    paddingTop: 0,
  },
  details: {
    flex: 2,
    flexDirection: "row",
    paddingRight: 20,
  },
  items: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 8,
  },
  titleText: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: "bold",
    color: colors.primary,
    fontSize: 16,
  },
  contentText: { paddingBottom: 10, color: colors.black, fontSize: 16 },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -40,
  },
  like: { flexDirection: "row", alignItems: "center" },
  comment: { flexDirection: "row", alignItems: "center" },
  commentbox: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderRadius: 10,
  },
  commenttitle: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
    justifyContent:"space-between"
  },
});
