import React, { Component, useEffect, useState, useRef } from "react";
import "./App.css";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("delete world!");
  const confirmDelete = useConfirm("REAL?", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
