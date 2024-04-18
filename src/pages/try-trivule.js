import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Try trivule" description="Test and try Trivule">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          fontSize: "20px",
        }}
      >
        <iframe
          src="https://stackblitz.com/edit/stackblitz-starters-y3yv98?embed=1&file=index.html"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </Layout>
  );
}
