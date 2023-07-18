import { rem } from "@mantine/core";

export const regions = {
  na: "North America",
  eu: "Europe",
  kr: "Korea",
  ap: "Asia-Pacific",
  latam: "Latin America",
  br: "Brazil",
};

export const orangeColorVoid = "rgb(230, 162, 30)";

export const calculateMinDisplayHeightCss = (add = 0) => {
  return `calc(100svh - ${rem(164 + add)})`;
};
