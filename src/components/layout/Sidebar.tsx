import { FC, KeyboardEvent, MouseEvent, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
}));

const Sidebar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: KeyboardEvent | MouseEvent
  ) => {
    if (
      event?.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    )
      return;

    setSidebar(open);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={sidebar}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        className={classes.fullList}
      >
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <Switch
                checked={true}
                // onChange={handleChange}
                color="secondary"
                name="checkedB"
                size="small"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </ListItemIcon>
            <ListItemText primary="WhatsApp" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Switch
                checked={true}
                // onChange={handleChange}
                color="secondary"
                name="checkedB"
                size="small"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </ListItemIcon>
            <ListItemText primary="Telegram" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Sidebar;
