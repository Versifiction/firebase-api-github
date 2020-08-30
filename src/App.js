import React, { useEffect, useState } from "react";
import { db } from "./config/firebase";

import "./App.css";

function App() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      db.ref("pseudos").on("value", (snapshot) => {
        setList(snapshot.val());
        setLoading(false);
      });
    } catch (err) {
      console.log("err ", err);
    }
  }, []);

  useEffect(() => {
    console.log("loading ", loading);
    console.log("list ", list);
  }, [loading, list]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>List</h1>
          <p>Pseudo: {list.pseudo}</p>
          <a
            href={`https://www.api.github.com/users/${list.pseudo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </>
      )}
    </div>
  );
}

export default App;
