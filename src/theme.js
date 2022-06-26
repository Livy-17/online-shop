import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    StepsStyleConfig
  }
};

const theme = extendTheme({ config });

export default theme;

