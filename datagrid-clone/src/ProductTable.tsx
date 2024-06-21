import { useState } from "react";
import products from "./products.json";

const ProductTable: React.FC = () => {
  const headers = [
    { key: "ProductName", label: "Product" },
    { key: "ProductID", label: "ID" },
    { key: "UnitPrice", label: "Unit Price" },
    { key: "QuantityPerUnit", label: "Qty Per Unit" },
  ];
  const [isShow, setShow] = useState<boolean[]>(
    Array(headers.length).fill(false)
  );
  const [clicked, setClicked] = useState<boolean>(true);

  const toggleShow = (index: number) => {
    setShow((prev) => {
      setClicked(!clicked);
      const updatedVisibleRows = [...prev];
      updatedVisibleRows[index] = !updatedVisibleRows[index];
      return updatedVisibleRows;
    });
  };
  return (
    <div className=" mx-5 mt-10 overflow-x-auto ">
      <table className=" divide-y divide-gray-200 table-fixed border-[1px] border-collapse text-left  min-w-full md:min-w-96 ">
        <thead className="border bg-gray-50">
          <tr className="text-left">
            <th className="border px-1 text-gray-50">sy</th>
            {headers.map((row) => {
              return (
                <td className=" border pl-2 pr-4 py-4" key={row.key}>
                  {row.label}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className="h-96 overflow-y-scroll ">
          {products.map((product, index) => {
            return (
              <>
                <tr
                  key={product.ProductID}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-gray-100"
                      : "bg-gray-50 hover:bg-gray-200"
                  }
                >
                  <td className="border pl-2 py-5  ">
                    <a
                      key={product.ProductID}
                      role="button"
                      href="#"
                      onClick={() => toggleShow(index)}
                      title="Toggle Show"
                    >
                      <span>
                        {!isShow[index] ? (
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z"></path>
                          </svg>
                        ) : (
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M96 224v64h320v-64z"></path>
                          </svg>
                        )}
                      </span>
                    </a>
                  </td>
                  <td className="border pl-2 ">{product.ProductName} </td>
                  <td className="border pl-2">{product.ProductID} </td>
                  <td className="border pl-2">{product.UnitPrice} </td>
                  <td className="border pl-2">{product.QuantityPerUnit} </td>
                </tr>
                {isShow[index] && (
                  <tr className="hover:bg-gray-200">
                    <td className="border pl-2 "> </td>
                    <td className="border pl-2 ">
                      <span className="font-bold">In Stock: </span>
                      {product.UnitsInStock} <br />
                      <span className="font-bold">On Order: </span>
                      {product.UnitsOnOrder} <br />
                      <span className="font-bold">Reorder Level: </span>
                      {product.ReorderLevel} <br />
                      <span className="font-bold">Discontinued: </span>
                      {product.ReorderLevel} <br />
                      <span className="font-bold">Category: </span>
                      {product.Category.CategoryName}-
                      {product.Category.Description} <br />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
