import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppForm from "../components/common/AppForm";
import Screen from "../components/common/Screen";
import * as Yup from "yup";
import colors from "../config/colors";
import SubmitButton from "../components/common/SubmitBUtton";
import { Snackbar } from "react-native-paper";
import routes from "../navigation/routes";
import AppFormField from "../components/common/AppFormField";
import AppFormImagePicker from "./../components/common/AppFormImagePicker";
import { translate } from "../components/common/translator";
import * as SecureStore from "expo-secure-store";
import { savePost } from "../api/postService";

export default function CreatePostFormScreen({ navigation, route }) {
  const campaign = route.params.campaign;

  const [snakVisible, SetSnackVisible] = useState(false);
  const validationSchema = Yup.object().shape({
    images: Yup.array()
      .min(1, "Please select at least one image")
      .label("Images"),
    description: Yup.string(),
  });
  const handleSubmit = async (values) => {
    const userId = await SecureStore.getItemAsync("userId");
    const data = {
      userId: userId,
      campaignId: campaign.id,
      description: values.description,
      image: values.images[0],
    };

    await savePost(data).then(() => {
      SetSnackVisible(true);
      setTimeout(() => {
        navigation.navigate(routes.MY_POST);
      }, 2500);
    }).then((error)=>console.log(error))

    
  };
  return (
    <Screen>
      <ScrollView>
        <View style={styles.form}>
          <AppForm
            initialValues={{
              images: [],
              description: "",
            }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <View style={styles.fields}>
              <AppFormImagePicker name={"images"} />
              <Text style={styles.text}>{translate("Description")}</Text>
              <AppFormField
                maxLength={255}
                name="description"
                multiline
                numberOfLines={5}
                height={110}
              />
            </View>
            <View style={styles.submit}>
              <SubmitButton
                title={translate("Post")}
                style={styles.submitbutton}
                fontSize={18}
              />
            </View>
          </AppForm>
        </View>
        <Snackbar
          visible={snakVisible}
          onDismiss={() => SetSnackVisible(false)}
          duration={2000}
          action={{
            label: translate("OK"),
            labelStyle: { color: colors.limeGreen, fontSize: 18 },
            onPress: () => {
              SetSnackVisible(false);
            },
          }}
          style={{ backgroundColor: colors.black }}
        >
          <View>
            <Text style={styles.snackbar}>{translate("CPFsnackbar")}</Text>
          </View>
        </Snackbar>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  form: {
    margin: 10,
    marginBottom: 20,
  },
  text: {
    color: colors.primary,
    fontSize: 15,
    marginTop: 30,
  },
  fields: {
    alignSelf: "center",
    width: 400,
    padding: 20,
    marginBottom: 40,
  },
  submit: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 20,
  },
  submitbutton: {
    width: 130,
    height: 40,
    borderRadius: 10,
    color: colors.white,
    marginRight: 5,
  },
  snackbar: {
    color: colors.limeGreen,
    fontSize: 18,
  },
});
