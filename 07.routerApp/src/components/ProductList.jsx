import { Link } from "react-router-dom";

function ProductsList() {
  const products = [
    { id: "1", name: "Product A" },
    { id: "2", name: "Product B" },
    { id: "3", name: "Product C" },
  ];

  return (
    <>
      <h1>Products</h1>
      <ul className="list-group">
        {products.map((item) => (
          <li key={item.id} className="list-group-item">
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
