import * as React from 'react'

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  ViewProps
} from 'react-native'
import { makeStyles } from '~/infrastructure/theme/styles'

type Props = {
  children: React.ReactNode
  style?: ViewProps['style']
}

export default function Container({ children, style }: Props) {
  const styles = useStyles({ style })

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export const useStyles = makeStyles(
  ({ palette }, { style }: Pick<Props, 'style'>) => ({
    container: {
      flex: 1,
      backgroundColor: palette.primary.contrastText.main,
      alignItems: 'center',
      justifyContent: 'center',
      ...(style as unknown[])
    },
    keyboardContainer: {
      flex: 1
    }
  })
)
