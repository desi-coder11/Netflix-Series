import React from "react";
import Cards from "./Cards";
import sdata from "./Data";

function App() {
  return (
    <>
      <h1 className="heading_style">Top 5 Netflix Series</h1>

      {sdata.map((val) => {
        return (
          <Cards
            imgscr={val.imgscr}
            sname={val.sname}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
