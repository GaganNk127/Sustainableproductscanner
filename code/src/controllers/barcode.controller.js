import axios from "axios"
import { asyncHandler } from "../utils/asyncHandler"
import { ApiError } from "../utils/ApiError"


const barcode = asyncHandler(async (req , res, next)=>{
    const {barcode} = req.body;
    if(!barcode)
    {
        throw new ApiError(404,"Not Found");
    }
    const response = await axios.post("https://api.upcitemdb.com/prod/trial/lookup",{barcode});
    const productName = response.data.items[0]?.title || 'Product Name Not Found';
    res.status(200).json({
        success: true,
        productname : productName
    });
})

export {barcode};