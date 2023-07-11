import { Link } from "react-router-dom";

function Products() {
  return (
    <section>
      <header>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link to="/">Inicio</Link>
          <Link to="/products">Produtos</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
      </header>
    </section>
  )
}

export default Products