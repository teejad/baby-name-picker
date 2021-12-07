import React from 'react';
import { NameList } from './NameList';
import { useNames } from '../providers/Names';
import { useAppState } from '../providers/AppState';


export function NamePicker () {
  const names = useNames();
  const { searchValue , shortList , setShortList } = useAppState();

  const filteredNames = names
  .filter(entry =>
    entry.name.toLowerCase().includes(searchValue.toLowerCase())
  )
  .filter(entry => !shortList.includes(entry.id));

function addToShortList (id) {
  setShortList([...shortList, id])
}
    return ( <NameList namesList={filteredNames} onItemClick={addToShortList} />);
}