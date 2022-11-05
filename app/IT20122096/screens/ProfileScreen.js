import React, { useState } from 'react'
import { RefreshControl, Text } from 'react-native'
import AppButton from '../components/common/AppButton'
import Screen from '../components/common/Screen'
import { en, sn } from "../constants/localization"
import * as Localization from 'expo-localization';
import i18n from "i18n-js"
import routes from '../navigation/routes'
import { translate, setLanguage } from '../components/common/translator'
translate
export default function ProfileScreen({ navigation }) {
  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, sn };
  i18n.locale = locale;
  return (
    <Screen>
      <Text>{i18n.t("languageSelector")}</Text>
      <AppButton
        title={"English"}
        onPress={() => {
          setLocale("en");
          setLanguage("en")
          //navigation.navigate(routes.ALL_CAMPAIGNS);
        }}
      />
      <AppButton
        title={"සිංහල"}
        onPress={() => {
          setLocale("sn");
          setLanguage("en");
          //navigation.navigate(routes.ALL_CAMPAIGNS);
        }}
      />
    </Screen>
  );
}
