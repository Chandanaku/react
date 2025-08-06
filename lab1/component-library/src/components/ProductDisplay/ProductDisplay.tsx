import type { ProductDisplayProps } from "../../types";
function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}
    >
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100px", objectFit: "cover" }}
        />
      )}

      <p>
        <strong>ID:</strong> {product.id}
      </p>
      <p>
        <strong>Name:</strong> {product.name}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      {showDescription && (
        <p>
          <strong>Description:</strong> {product.description}
        </p>
      )}

      {showStockStatus && (
        <p style={{ color: product.inStock ? "green" : "red" }}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}

      <button
        type="button"
        style={{ backgroundColor: "blue", color: "white", padding: "5px 10px" }}
        onClick={() => onAddToCart?.(product.id)}
      >
        Add to Cart
      </button>
      {children}
    </div>
  );
}

export default ProductDisplay;
