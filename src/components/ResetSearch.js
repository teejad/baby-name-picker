import React from "react";

import { useAppState } from "../providers/AppState";

export function ResetSearch() {
  const { searchValue, setSearchValue } = useAppState();

  if (!searchValue) {
    return null;
  }
  return (
    <button onClick={() => setSearchValue("")} className="reset-search">
      reset search
    </button>
  );
}

