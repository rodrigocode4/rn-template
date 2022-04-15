import React from 'react'
import {
  View, Text, TextInput, TextInputProps, TextStyle, StyleSheet,
} from 'react-native'
import { useInputStyles } from './Input.styles'

interface Props extends TextInputProps {
    labelText?: string
    labelSyles?: TextStyle
}

export default (props: Props) => {
  const styles = useInputStyles()
  return (
        <View style={styles.container}>
            <Text
                style={StyleSheet.flatten([styles.text, props.labelSyles])}
            >{props.labelText}</Text>
            <TextInput
                {...props}
                style={StyleSheet.flatten([styles.input, props.style])}
            />
        </View>
  )
}
