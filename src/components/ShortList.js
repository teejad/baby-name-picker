import React, { Fragment } from "react";

import { NameList } from "./NameList";
import { useNames } from "../providers/Names";
import { useAppState } from "../providers/AppState";

export function ShortList() {
  const names = useNames();
  const { shortList, setShortList } = useAppState();

  const shortListedNames = shortList.map(id => names[id]);
  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id));
  }

  const hasNames = shortListedNames.length > 0;
  return (
    <div className="short-list">
      <h2>
        {hasNames ? "Your shortlist" : "Click on a name to shortlist it."}
      </h2>
      {hasNames && (
        <Fragment>
          <NameList
            namesList={shortListedNames}
            onItemClick={removeFromShortList}
          />
          <hr />
        </Fragment>
      )}
    </div>
  );
}