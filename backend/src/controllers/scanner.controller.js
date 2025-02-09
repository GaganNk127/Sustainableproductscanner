import axios from "axios";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const scanned = asyncHandler(async (req, res, next) => { 
    try {
        const { productName, barcode } = req.body;

        if (!productName && !barcode) {
            throw new ApiError(400, "Product name or barcode is required");
        }

    
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
            {
                contents: [
                    { role: "user", parts: [{ text: `Determine the sustainability score for ${productName || barcode} give in one word score between 1-100` }] }
                ]
            },
            {
                params: { key: process.env.GEMINI_API_KEY },
                headers: { "Content-Type": "application/json" }
            }
        );

        const sustainabilityScore = response.data.candidates?.[0].content || "N/A";
        console.log(sustainabilityScore);
        res.status(200).json({
            success: true,
            product: productName || barcode,
            sustainabilityScore: sustainabilityScore,
            message: "Sustainability score retrieved successfully",
        });

    } catch (error) {
        console.error("Error fetching sustainability score:", error);
        next(new ApiError(500, "Failed to fetch sustainability score"));
    }
});

export { scanned };
