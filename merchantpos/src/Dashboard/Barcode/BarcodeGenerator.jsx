import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const BarcodeGenerator = ({ barcodeValue }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    // Generate the barcode when the component renders
    JsBarcode(barcodeRef.current, barcodeValue, {
      format: "CODE128", // You can change the format as per the requirement
      lineColor: "#000",
      width: 2,
      height: 100,
      displayValue: true,
    });
  }, [barcodeValue]);

  return (
    <div>
      <svg ref={barcodeRef}></svg>
    </div>
  );
};

export default BarcodeGenerator;
