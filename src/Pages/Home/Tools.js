import React, { useEffect, useState } from "react";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const [tools, setTools] = useState();

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h3 text-xl text-center>
        Our Tools
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
        {tools?.map((tool) => (
          <ToolsCard key={tool._id} tool={tool}></ToolsCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
