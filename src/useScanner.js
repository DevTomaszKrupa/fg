import { useState, useEffect } from "react";

const useScanner = () => {
  const [scannedItems, setScannedItems] = useState([]);

  let barcode = "";

  useEffect(() => {
    document.addEventListener("keydown", handleBarcodeScan);

    return () => {
      document.removeEventListener("keydown", handleBarcodeScan);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBarcodeScan = (event) => {
    console.log({ keydown: event });
    if (event.key === "Enter") {
      handleScan(barcode);
      return;
    }

    barcode += event.key;

    setTimeout(() => {
      barcode = "";
    }, 1000);
  };

  const handleScan = (barcode) => {
    const processedBarcode = barcode.replaceAll("Shift", "");
    setScannedItems((prevState) => [
      ...prevState,
      {
        barcode: processedBarcode,
        scannedItemType: "Container",
      },
    ]);
  };

  return scannedItems;
};

export default useScanner;
