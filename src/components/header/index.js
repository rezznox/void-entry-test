import {
  createStyles,
  Header,
  Container,
  Anchor,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = rem(84);

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.black,
    }).background,
    borderBottom: 0,
    background: "black",
    height: HEADER_HEIGHT,
    marginBottom: '0 !important'
  },

  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: "uppercase",
    fontSize: rem(13),
    color: theme.white,
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: "border-color 100ms ease, opacity 100ms ease",
    opacity: 0.9,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,

    "&:hover": {
      opacity: 0.8,
      textDecoration: "none",
    },
  },

  secondaryLink: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.xs,
    textTransform: "uppercase",
    transition: "color 100ms ease",

    "&:hover": {
      color: theme.white,
      textDecoration: "none",
    },
  },

  mainLinkActive: {
    color: theme.white,
    opacity: 1,
    borderBottomColor:
      theme.colorScheme === "dark" ? theme.white : "rgb(230, 162, 30)",
    backgroundColor: "rgb(230, 162, 30)",
  },
}));

export default function AppHeader({ mainLinks }) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const pathname = usePathname() || "/";
  const active =
    mainLinks.findIndex((headerLink) => headerLink.regex.test(pathname) > 0) ??
    0;

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, {
        [classes.mainLinkActive]: index === active,
      })}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.header}>
      <Container className={classes.inner}>
        <Anchor style={{ color: "#fff" }} href={'/'} className={classes.mainLink}>
          Void.GG Test
        </Anchor>

        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          color="#fff"
        />
      </Container>
    </Header>
  );
}
