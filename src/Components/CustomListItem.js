import React from "react";

import { ListItem, ListItemContent } from "react-mdl";

function CustomListItem(props) {
  return (
    <div>
      <ListItem>
        <ListItemContent style={{ fontSize: "32px", fontFamily: "Anton" }}>
          <i className={props.icon} aria-hidden="true" /> {props.content}
        </ListItemContent>
      </ListItem>
    </div>
  );
}

export default CustomListItem;
