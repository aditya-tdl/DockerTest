import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const BarcodeScanner = ({ onScanSuccess, onScanFailure }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5Qrcode(scannerRef.current);

    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // Start the scanner
    scanner
      .start(
        { facingMode: "environment" }, // Back camera
        config,
        (decodedText) => {
          console.log(`Scanned barcode: ${decodedText}`);
          onScanSuccess(decodedText); // Handle the scanned barcode data
        },
        (errorMessage) => {
          console.log(`Scanning error: ${errorMessage}`);
          onScanFailure(errorMessage); // Handle scanning errors
        }
      )
      .catch((error) => {
        console.error("Error starting barcode scanner", error);
      });

    return () => {
      // Cleanup on component unmount
      scanner
        .stop()
        .then(() => {
          console.log("Scanner stopped");
        })
        .catch((error) => {
          console.log("Error stopping scanner", error);
        });
    };
  }, [onScanSuccess, onScanFailure]);

  return (
    <div>
      <h3>Scan a Barcode:</h3>
      <div id="reader" ref={scannerRef} style={{ width: "300px" }}></div>
    </div>
  );
};

export default BarcodeScanner;
