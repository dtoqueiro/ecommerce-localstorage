// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    dropShadow: string;

    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      info: string;
      background: string;
      light: string;
    };
  }
}
