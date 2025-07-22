"use client";

import { useEffect, useState } from "react";
import BubblePackChart from "./BubbleChart";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/bubbles.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Company Bubble Chart</h2>
      {data ? <BubblePackChart data={data} /> : <p>Loading...</p>}
    </div>
  );
}
