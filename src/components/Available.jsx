import React from "react";

export default function Available({ since, inline = false }) {
  return (
    <span>
      <span
        style={{
          backgroundColor: "#69B34C",
          borderRadius: "2px",
          color: "#fff",
          padding: "0.2rem",
        }}
      >
        Available since {since}
      </span>
      {inline ? "" : <br />}
      {inline ? "" : <br />}
    </span>
  );
}
