import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  // extract productId from URL
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    { id: "1", name: "Product A", price: 100, category: "Electronics" },
    { id: "2", name: "Product B", price: 200, category: "Kitchen Accessories" },
    { id: "3", name: "Product C", price: 300, category: "Vehicle Maintenance" },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-4 border rounded">
      <h1>Product: {product.name}</h1>
      <p>
        Category: {product.category} - Price: {product.price}
      </p>
      <Link
        to="/products"
        // onClick={(e) => {
        //   e.preventDefault();
        //   navigate(-1);
        // }}
      >
        Back to Product List
      </Link>
    </div>
  );
};

export default ProductDetails;
