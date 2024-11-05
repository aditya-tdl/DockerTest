import React, { useState, useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productId: "",
    price: "",
  });

  const [barcodeData, setBarcodeData] = useState("");
  const barcodeRef = useRef(null);

  // Generate barcode on product data change
  useEffect(() => {
    if (barcodeData) {
      JsBarcode(barcodeRef.current, barcodeData, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true,
      });
    }
  }, [barcodeData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine product info into barcode data
    const { productName, productId, price } = product;
    const dataForBarcode = `${productName}-${productId}-${price}`;
    setBarcodeData(dataForBarcode);
    console.log("Product Added:", product);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            name="productId"
            value={product.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Generate Barcode</button>
      </form>

      {barcodeData && (
        <div>
          <h3>Generated Barcode</h3>
          <svg ref={barcodeRef}></svg>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
