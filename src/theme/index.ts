import { extendTheme } from "native-base";

export const DashboardTheme = extendTheme({
    components:{
        Text: {
            defaultProps: {
              fontSize: "lg",
            },
          },
    }
});