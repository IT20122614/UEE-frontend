import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from "formik";

function SubmitButton({ title, style, fontSize }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      style={style}
      fontSize={fontSize}
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;