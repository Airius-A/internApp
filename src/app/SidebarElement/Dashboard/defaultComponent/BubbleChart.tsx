"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

type BubbleData = {
  name: string;
  value?: number;
  children?: BubbleData[];
  [key: string]: any; // 允许额外字段如 code
};

type BubblePackChartProps = {
  data: BubbleData | null;
};

export default function BubblePackChart({ data }: BubblePackChartProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!data || !ref.current) return;

    ref.current.innerHTML = "";

    const width = 600;
    const height = 600;

    const root = d3.hierarchy<BubbleData>(data).sum((d) => d.value || 0);
    const pack = d3.pack<BubbleData>().size([width, height]).padding(3);
    const nodes = pack(root).descendants();

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", height)
      .style("cursor", "pointer");

    const tooltip = d3
      .select(ref.current)
      .append("div")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.7)")
      .style("color", "#fff")
      .style("padding", "4px 8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    const g = svg.append("g");

    const node = g
      .selectAll<SVGGElement, (typeof nodes)[0]>("g")
      .data(nodes)
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    node
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => (d.children ? "#ddd" : "#69b3a2"))
      .attr("stroke", "#333")
      .attr("stroke-width", 1)
      .on("click", (_event, d) => zoomTo(d))
      .on("mousemove", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(
            `Company name: ${d.data.name || "N/A"}<br/>Value: ${
              d.data.value ?? "N/A"
            }`
          )
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY + 10 + "px");
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      });

    node
      .filter((d) => !d.children)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .style("font-size", "10px")
      .style("pointer-events", "none");

    svg.on("click", (event) => {
      if ((event.target as Element).tagName === "svg") {
        zoomTo(root);
      }
    });

    function zoomTo(d: (typeof nodes)[0]) {
      const scale = Math.max(1, 250 / d.r);
      const x = d.x;
      const y = d.y;

      g.transition()
        .duration(750)
        .attr(
          "transform",
          `translate(${width / 2},${
            height / 2
          }) scale(${scale}) translate(${-x},${-y})`
        );
    }
  }, [data]);

  return <div ref={ref} />;
}
