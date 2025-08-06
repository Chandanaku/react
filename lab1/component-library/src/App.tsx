import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import "./App.css";

import ProductDisplay from "./components/ProductDisplay/ProductDisplay";

function App() {
  const product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://example.com/headphones.jpg",
    inStock: true,
  };
  const user1 = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  return (
    <div className="p-4">
      {
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => true}
        />
      }

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <UserProfileCard user={user1} showEmail={true} showRole={true} />

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={() => user1}
        />
      </div>
    </div>
  );
}
export default App;
