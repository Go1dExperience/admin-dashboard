import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import AnchorMenu from "../../atoms/anchor";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

	const menuItem = ["IP Management", "Action 1", "Action 2", "Drafts"]

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <AnchorMenu
              anchor={anchor}
              toggleDrawer={toggleDrawer}
							menuItem={menuItem}
            />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
