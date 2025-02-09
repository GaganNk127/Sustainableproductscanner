import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
    const [productName, setProductName] = useState("");
    const [barcode, setBarcode] = useState("");
    const [sustainabilityScore, setSustainabilityScore] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [altLoading, setAltLoading] = useState(false);
    const [alternatives, setAlternatives] = useState([]);

    // Fetch sustainability score
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
    
        try {
            const response = await axios.post("http://localhost:8000/scanner/scanner", { productName, barcode });
            console.log("API Response:", response.data);
           
            const rawScore = response.data?.sustainabilityScore?.parts?.[0]?.text?.trim() || "N/A";
            const score = /^\d+$/.test(rawScore) ? parseInt(rawScore, 10) : "N/A";
    
            setSustainabilityScore(score);
        } catch (err) {
            console.error("Axios Error:", err.response?.data || err.message);
            setError("Failed to fetch the sustainability score.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch alternative products
    const handleAlternatives = async () => {
        if (!productName) {
          setError("Please enter a Product Name.");
          return;
        }
    
        setAltLoading(true);
        setError("");
    
        try {
          const response = await axios.post("http://localhost:8000/scanner/alternatives", {
            productName,
            barcode,
          });
    
          const altText = response.data?.alternatives?.parts?.[0]?.text || "No alternatives found";
          const altArray = altText.split("\n").map((item) => item.replace(/^\* /, "").trim());
    
          setAlternatives(altArray);
        } catch (err) {
          setError("Failed to fetch alternatives.");
        } finally {
          setAltLoading(false);
        }
    };

    // Function to determine the color of the score
    const getScoreColor = () => {
        if (sustainabilityScore === "N/A") return "text-gray-600";
        if (sustainabilityScore >= 80) return "text-green-500";
        if (sustainabilityScore >= 50) return "text-yellow-500";
        return "text-red-500";
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
            <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">🌱 Product Sustainability Scanner</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold">Product Name:</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold">Barcode (Optional):</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
                            value={barcode}
                            onChange={(e) => setBarcode(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between mt-4">
                        <button type="submit" 
                            className="w-[48%] bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
                            disabled={loading}>
                            {loading ? "Scanning..." : "Check Sustainability"}
                        </button>

                        <button type="button" 
                            className="w-[48%] bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                            onClick={handleAlternatives}
                            disabled={altLoading}>
                            {altLoading ? "Fetching..." : "Find Alternatives"}
                        </button>
                    </div>
                </form>

                {/* Sustainability Score */}
                {sustainabilityScore !== null && (
                    <p className="mt-6 text-lg font-semibold text-center">
                        🌿 Sustainability Score: 
                        <span className={`ml-2 ${getScoreColor()} text-xl`}>{sustainabilityScore}</span>
                    </p>
                )}

                {/* Alternative Products List */}
                {alternatives.length > 0 && (
                    <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
                        <h4 className="text-lg font-semibold text-gray-700">♻️ Alternative Products</h4>
                        <ul className="mt-2 space-y-2">
                            {alternatives.map((alt, index) => (
                                <li key={index} className="p-2 bg-white rounded-md shadow hover:bg-gray-100 transition duration-200">
                                    {alt}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Error Message */}
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            </div>
        </div>
    );
};

export default ProductForm;
