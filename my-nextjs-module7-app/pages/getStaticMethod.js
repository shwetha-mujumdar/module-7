import { useEffect, useState } from "react";

function GetStaticMethod() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/dummy-backend.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log("products data", data.products);
      });
  }, []);
  return (
    <ul>
      {products.map((product) => {
        <li key={product.id}>{product.title}</li>;
      })}
    </ul>
  );
}
export default GetStaticMethod;
