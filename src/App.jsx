import { useState } from "react";

const products = [
  {
    id: 1,
    name: "QAVAH KAIROS",
    price: "$55",
    description:
      "Heavyweight vintage washed streetwear inspired by divine timing.",
    image: "/images/Qavah-temple-.jpeg"
  },

  {
    id: 2,
    name: "Heirs to the Kingdom",
    price: "$60",
    description:
      "Bold kingdom-inspired streetwear for the chosen generation.",
    image: "/images/IMG_3723.png"
  }
];

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
          borderBottom: "1px solid #333"
        }}
      >
        <strong>QAVAH KAIROS</strong>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("shop")}>
            Shop
          </button>

          <button onClick={() => setPage("story")}>
            Story
          </button>
        </div>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div
          style={{
            textAlign: "center",
            padding: 60
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>
            QAVAH KAIROS
          </h1>

          <p style={{ color: "#aaa" }}>
            Streetwear rooted in purpose, patience, and divine timing.
          </p>
        </div>
      )}

      {/* SHOP */}
      {page === "shop" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: 20,
            padding: 20
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #333",
                padding: 15,
                background: "#111"
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  marginBottom: 15
                }}
              />

              <h2>{p.name}</h2>

              <p style={{ color: "#aaa" }}>
                {p.description}
              </p>

              <h3>{p.price}</h3>

              <button
                style={{
                  background: "#fff",
                  color: "#000",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  marginTop: 10
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* STORY */}
      {page === "story" && (
        <div
          style={{
            padding: 40,
            maxWidth: 700,
            margin: "auto"
          }}
        >
          <h2>Our Story</h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: 1.7
            }}
          >
            Qavah means to wait with hopeful expectation.
            Kairos means God's appointed time.
            This brand exists for creators, warriors,
            and believers walking through the process
            before the promise.
          </p>
        </div>
      )}
    </div>
  );
}
