import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const A = [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"];

export default function Icon() {
  const u = 20;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#050806", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {A.map((row, y) => (
            <div key={y} style={{ display: "flex" }}>
              {row.split("").map((c, x) => (
                <div key={x} style={{ width: u, height: u, background: c === "#" ? "#00ff41" : "transparent", border: c === "#" ? "2px solid #050806" : "none" }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
