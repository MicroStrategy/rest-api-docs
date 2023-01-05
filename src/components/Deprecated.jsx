import React from "react";

export default function Deprecated({ since, inline = false }) {
  return (
    <span>
      <span
        style={{
          backgroundColor: "#D9232E",
          borderRadius: "2px",
          color: "#fff",
          padding: "0.2rem",
        }}
      >
        Deprecated since {since}
      </span>
      {inline ? "" : <br />}
      {inline ? "" : <br />}
    </span>
  );
}
