import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Heirs to the Unseen Kingdom Tee",
    price: "$38",
    description: "Vintage washed streetwear with bold spiritual typography."
  },
  {
    id: 2,
    name: "Adopted by the Almighty Hoodie",
    price: "$62",
    description: "Heavyweight comfort with statement back design."
  },
  {
    id: 3,
    name: "Kairos Waiting Room Cap",
    price: "$28",
    description: "A reminder of divine timing."
  }
];

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "Arial" }}>

      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: 20, borderBottom: "1px solid #333" }}>
        <strong>QAVAH KAIROS</strong>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("shop")}>Shop</button>
          <button onClick={() => setPage("story")}>Story</button>
        </div>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div style={{ textAlign: "center", padding: 60 }}>
          <h1>QAVAH KAIROS</h1>
          <p>A brand rooted in God’s timing, purpose, and creativity.</p>
        </div>
      )}

      {/* SHOP */}
      {page === "shop" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, padding: 20 }}>
          {products.map(p => (
            <div key={p.id} style={{ border: "1px solid #333", padding: 15 }}>
              <h3>{p.name}</h3>
              <p style={{ color: "#aaa" }}>{p.description}</p>
              <strong>{p.price}</strong>
            </div>
          ))}
        </div>
      )}

      {/* STORY */}
      {page === "story" && (
        <div style={{ padding: 40, maxWidth: 600, margin: "auto" }}>
          <h2>Our Story</h2>
          <p style={{ color: "#aaa" }}>
            Qavah means to wait with expectation. Kairos means appointed time.
          </p>
        </div>
      )}

    </div>
  );
}
