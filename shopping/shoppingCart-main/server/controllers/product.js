const Product = require("../models/product")
// exports.user = async (req, res) => {
// 	try {
// 		res.status(200).json("kara na kya chate ho..!")
// 	} catch (err) {
// 		console.error(err.message)
// 	}
// }
exports.getProduct = (req, res) => {
    return res.json(req.product)
}