import { React, useState } from "react";
import products from "./products.json";

const ProductTable = () => {
  const headers = [
    { key: "ProductName", label: "Product" },
    { key: "ProductID", label: "ID" },
    { key: "UnitPrice", label: "Unit Price" },
    { key: "QuantityPerUnit", label: "Qty Per Unit" },
  ];
  return (
    <div className="max-h-96 mx-5 mt-10 ">
      <table className=" table-fixed border-[1px] border-collapse text-left">
        <thead className="border bg-gray-50">
          <tr className="text-left">
            <th className="border px-1 py-4 text-gray-50">sy</th>
            {headers.map((row) => {
              return (
                <td className=" border pl-2 pr-4" key={row.key}>
                  {row.label}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className="h-96 overflow-y-scroll bg-white">
          {products.map((product) => {
            return (
              <>
                <tr className="hover:bg-tablehover" key={product.ProductID}>
                  <td className="border pl-2 py-3">
                    <a href="#">
                      <span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z"></path>
                        </svg>
                      </span>
                    </a>
                  </td>
                  <td className="border pl-2 ">{product.ProductName} </td>
                  <td className="border pl-2">{product.ProductID} </td>
                  <td className="border pl-2">{product.UnitPrice} </td>
                  <td className="border pl-2">{product.QuantityPerUnit} </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
