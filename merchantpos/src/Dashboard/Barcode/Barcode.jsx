import React from "react";
import BarcodeGenerator from "./BarcodeGenerator";

const Barcode = () => {
  const barcodeValue = "123456789012";
  return (
    <div className="App">
      <h1>Generated Barcode</h1>
      <BarcodeGenerator barcodeValue={barcodeValue} />
    </div>
  );
};

export default Barcode;
