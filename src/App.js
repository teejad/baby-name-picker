import React, { Fragment } from "react";
import "./App.css";

import { Footer } from "./components/Footer";
import { NamePicker } from "./components/NamePicker";
import { ResetSearch } from "./components/ResetSearch";
import { Search } from "./components/Search";
import { ShortList } from "./components/ShortList";

function App() {
  return (
    <Fragment>
      <Search />
      <NamesContainer />
      <Footer />
    </Fragment>
  );
}

function NamesContainer() {
  return (
    <main>
      <ShortList />
      <NamePicker />
      <ResetSearch />
    </main>
  );
}

export default App;