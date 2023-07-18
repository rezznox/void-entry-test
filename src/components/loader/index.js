import { Flex, Loader } from "@mantine/core";
import { calculateMinDisplayHeightCss, orangeColorVoid } from "../constants";

export default function AppLoader() {
  return (
    <Flex justify="center" align="center">
      <Loader variant="bars" color={orangeColorVoid} />
    </Flex>
  );
}

export const AppLoaderWholeScreen = ({ sub }) => {
  return (
    <Flex
      h={calculateMinDisplayHeightCss(sub)}
      w="100%"
      justify="center"
      align="center"
    >
      <AppLoader></AppLoader>
    </Flex>
  );
};
