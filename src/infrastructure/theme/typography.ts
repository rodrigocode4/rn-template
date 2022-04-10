import { PixelRatio } from "react-native";
import { normalize } from "./normalize";
import { Fonts, ThemeTypographys } from "./types";

const FRONT_SIZE = 12;
const typographyRem = (n: number = 1) => {
    const result = Math.round(
      PixelRatio.roundToNearestPixel(normalize(FRONT_SIZE * n)),
    )
    return result - 2
}

const fonts: Partial<Fonts> = {};

const createTypography = (
    typographyParam: Partial<ThemeTypographys> = {},
  ): ThemeTypographys => {
    const remFn = typographyParam.remFn ?? typographyRem;
    return {
      remFn,
      h1: remFn(typographyParam.h1 ?? 2.8),
      h2: remFn(typographyParam.h2 ?? 2.4),
      h3: remFn(typographyParam.h3 ?? 2.0),
      h4: remFn(typographyParam.h4 ?? 1.8),
      h5: remFn(typographyParam.h5 ?? 1.6),
      h6: remFn(typographyParam.h6 ?? 1.4),
      paragraph: remFn(typographyParam.paragraph ?? 1.0),
      fonts: {
        ...fonts,
        ...typographyParam.fonts,
      },
    }
}

export { createTypography }