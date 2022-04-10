import { makeStyles } from "../../infrastructure/theme/styles";

export const useInputStyles = makeStyles(({palette, spacing}) => ({
    container: {
      paddingVertical: spacing()
    },
    text: {
      color: palette.common?.black,
      fontSize: spacing(2),
      textAlign: 'left',
      backgroundColor: palette.primary.contrastText.dark,
    },
    input: {
      height: spacing(5),
      width: spacing(40),
      borderWidth: spacing(0.2),
      paddingHorizontal: spacing(),
    }
}))