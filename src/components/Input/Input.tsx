import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  StyleSheet
} from 'react-native'

import { makeStyles } from '~/infrastructure/theme/styles'

interface Props extends TextInputProps {
  labelText?: string
  labelSyles?: TextStyle
}

export default function Input(props: Props) {
  const styles = useInputStyles()
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.flatten([styles.text, props.labelSyles])}>
        {props.labelText}
      </Text>
      <TextInput
        {...props}
        style={StyleSheet.flatten([styles.input, props.style])}
      />
    </View>
  )
}

export const useInputStyles = makeStyles(({ palette, spacing }) => ({
  container: {
    paddingVertical: spacing()
  },
  text: {
    color: palette.common?.black,
    fontSize: spacing(2),
    textAlign: 'left',
    backgroundColor: palette.primary.contrastText.dark
  },
  input: {
    height: spacing(5),
    width: spacing(40),
    borderWidth: spacing(0.2),
    paddingHorizontal: spacing()
  }
}))
