function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? "#facc15" : "#d1d5db" }}>
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
}

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <span className="badge">{product.category}</span>

      <h4>{product.title}</h4>

      <StarRating rating={product.rating} />

      <p className="description">{product.description}</p>

      <div className="price">₹{product.price}</div>

      {onAdd && (
        <button onClick={() => onAdd(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
