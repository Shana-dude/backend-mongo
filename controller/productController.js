const productModel = require("../model/Product");

exports.getProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

exports.postProduct = async (req, res) => {
   const { name, price, description, category } = req.body;

  try {
   

    const { name, price, description, category } = req.body;

    const newProduct = new productModel({
      name,
      price,
      description,
      category,
    });

    await newProduct.save();

    res.status(201).json(newProduct);

  } catch (error) {
    console.error("🔥 REAL ERROR:", error);   // LOG REAL ERROR
    res.status(500).json({ error: "server error" });
  }
};

exports.deleteProduct=async(req,res)=>{
    const id = req.params.id;
    const deleted = await productModel.findByIdAndDelete(id);
    if(!deleted){
        return res.status(404).json({message:"Product not found"});
    }
    res.status(200).json({message:"Product deleted successfully"});
}