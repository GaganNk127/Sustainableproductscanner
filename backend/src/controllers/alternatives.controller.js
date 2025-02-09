import axios from 'axios';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

const Alternatives = asyncHandler(async (req, res, next) => {
  try {
    const { productName, barcode } = req.body;

    if (!productName && !barcode) {
      throw new ApiError(400, "Product name or barcode is required"); 
    }

    let prompt;
    if (productName) {
      prompt = `Determine the Alternatives for ${productName} give at least 3 alternatives in a list format and give a space after each alternatives`; 
    } else if (barcode) {
      prompt = `Determine the Alternatives for the product with barcode ${barcode} give at least 3 alternatives `;
    }

    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          { role: "user", parts: [{ text: prompt }] },
        ],
      },
      {
        params: { key: process.env.GEMINI_API_KEY },
        headers: { "Content-Type": "application/json" },
      }
    );

    const alternatives = response.data.candidates?.[0].content || 'NA';
    console.log(alternatives)
    res.status(200).json({ alternatives });
  } catch (error) {
    console.error("Error fetching alternatives:", error);
    next(new ApiError(500, "Failed to fetch alternatives"));
  }
});

export { Alternatives };