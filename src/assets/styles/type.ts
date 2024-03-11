export interface Theme {
  typograph: {
    sm: {
      fontSize: string;
      lineHeight: string;
    };
    md: {
      fontSize: string;
      lineHeight: string;
    };
    xl: {
      fontSize: string;
      lineHeight: string;
    };
    bold: number;
    semiBold: number;
    medium: number;
    regular: number;
  };
  colors: { [key: string]: string };
}
