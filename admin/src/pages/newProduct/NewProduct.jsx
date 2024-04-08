import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Assuming you want to store the image URL directly
    const productData = {
      title: inputs.title,
      desc: inputs.desc,
      price: inputs.price,
      categories: cat.split(",").map((c) => c.trim()), // Split categories by comma and trim whitespace
      inStock: inputs.inStock === "true",
      imageURL: inputs.imageURL, // Use the imageURL from the input field
    };

    // Dispatch action to add product
    dispatch(addProduct(productData));

    // Optionally, you can reset the form fields after successful submission
    setInputs({});
    setCat("");
  }
    
  

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image URL</label>
          <input
            type="text"
            name="imageURL"
            placeholder="https://example.com/image.jpg"
            value={inputs.imageURL}
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Mango..."
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Description..."
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text"
           placeholder="Fruit, Vegetable"
            value={cat} 
            onChange={(e)=>handleCat(e)}
             />
        </div>
        {/* <div className="addProductItem">
          <label>Color</label>
          <select name="color" onChange={handleChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="pink">Pink</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </div> */}
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {/* <Link to="/success"> */}
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
