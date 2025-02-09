import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

function Scanner() {
    const [scanResult, setScanResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [scanner, setScanner] = useState(null);
    
    async function getproduct(){
        const product = axios.post("http://localhost:8000/scanner/scanner",scanResult);
    } 

    useEffect(() => {
        const initializeScanner = async () => {
            try {
                const html5QrcodeScanner = new Html5QrcodeScanner(
                    "reader",
                    {
                        qrbox: {
                            width: 250,
                            height: 250,
                        },
                        fps: 5,
                    }
                );

                setScanner(html5QrcodeScanner);

                const success = (result) => {
                    html5QrcodeScanner.clear();
                    setScanResult(result);
                    setErrorMessage(null);
                };

                const error = (err) => {
                    console.error("QR Code Scan Error:", err);
                    setErrorMessage("⚠️ Error scanning QR code. Please try again.");
                };

                await html5QrcodeScanner.render(success, error);
            } catch (error) {
                console.error("Scanner Initialization Error:", error);
                setErrorMessage("❌ Failed to initialize the scanner.");
            }
        };

        initializeScanner();

        return () => {
            if (scanner) {
                scanner.clear();
            }
        };
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">📷 QR Code Scanner</h2>

                {errorMessage && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                        {errorMessage}
                    </div>
                )}

                {scanResult ? (
                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                        <p className="text-green-600 font-semibold mb-2">✅ Scan Successful!</p>
                        <a 
                            href={scanResult} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 font-medium underline hover:text-blue-800 transition duration-200">
                            {scanResult}
                        </a>
                        <button 
                            onClick={() => navigator.clipboard.writeText(scanResult)}
                            className="ml-3 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                            📋 Copy
                        </button>
                        <button onClick={getproduct}> Get Product Name</button>
                    </div>
                ) : (
                    <div id="reader" className="p-4 border-2 border-dashed border-gray-400 rounded-lg"></div>
                )}

                {!scanResult && (
                    <p className="mt-3 text-sm text-gray-500">Align the QR code inside the box to scan.</p>
                )}
            </div>
        </div>
    );
}

export default Scanner;
