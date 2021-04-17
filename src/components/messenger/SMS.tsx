import { MouseEventHandler, FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SMSIcon from "@material-ui/icons/Sms";

import { useAppContext } from "../../context/Context";

const useStyles = makeStyles({
  button: {
    color: "#f5f5f5",
    backgroundColor: "#1A73E8",

    "&:hover": {
      backgroundColor: "#2d72ce",
    },

    "&:active": {
      backgroundColor: "#5787c5",
    },

    "&:focus": {
      boxShadow: "0 0 0 0.2rem #4c85cf",
    },
  },
});

const Email: FC = () => {
  const { text } = useAppContext();
  const classes = useStyles();

  const handleClick: MouseEventHandler = () => {
    const body = text
      .map(({ name, count, delivery }) => {
        const deliveryType = delivery ? `(${delivery})` : "";
        return `${name} ${count} ${deliveryType}`;
      })
      .join("\n");
    const url = `sms:?body=${encodeURIComponent(body)}`;

    window.open(url, "_blank");
  };

  return (
    <Button
      variant="contained"
      className={classes.button}
      startIcon={<SMSIcon />}
      onClick={handleClick}
    >
      SMS
    </Button>
  );
};

export default Email;
