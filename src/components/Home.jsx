import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <header>
        <nav style={{ display: "flex", gap: "2rem" }}>
        <Link to="/">Inicio</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        </nav>
      </header>

      <h2>Página inicial</h2>
      <p>Seja bem-vindo(a) á nossa loja.</p>
    </section>
  )
}

