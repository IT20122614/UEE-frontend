import { en, sn } from "../../constants/localization";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { useState } from "react";

i18n.fallbacks = true;
i18n.translations = { en, sn };
i18n.locale = Localization.locale;

export  function translate(txt) {
  return i18n.t(txt)
}
export function setLanguage(locale) {
  i18n.locale = locale;
}

