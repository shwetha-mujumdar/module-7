import React from "react";

function PreRender(props) {
  // const { products} = props;
  const products = [
    {
      id: "p1",
      title: "Product 1",
    },
    {
      id: "P2",
      title: "XYZ",
    },
  ];

  // Hard coded data
  //   return (
  //     <div>
  //       <ul>
  //         <li>product 1</li>
  //         <li>product 2</li>
  //         <li>product 3</li>
  //       </ul>
  //     </div>
  //   );
  // }

  //   export async function getStaticProps() {
  //     return {
  //         products: [
  //           {
  //             id: "p1",
  //             title: "Product 1",
  //           },
  //         ],

  //     };
  // }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
export default PreRender;
