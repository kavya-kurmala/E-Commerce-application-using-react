import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Vendor() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!form.title || !form.price || !form.image || !form.rating) {
      alert("Please fill all required fields");
      return;
    }

    const product = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      price: form.price,
      category: form.category,
      image: form.image,
      rating: Number(form.rating)
    };

    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    alert("Product Added Successfully");

    // clear form
    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
      rating: ""
    });
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar title="Vendor Dashboard" />

      <div className="page">
        {/* Add Product */}
        <div className="card">
          <h3>Add Product</h3>

          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
          <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
          <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
          <input name="rating" type="number" min="1" max="5" placeholder="Rating (1-5)" value={form.rating} onChange={handleChange} />

          <button onClick={addProduct}>Add Product</button>
        </div>

        {/* Vendor Product List */}
        <div className="card">
          <h3>My Products</h3>

          {products.length === 0 && <p>No products added yet.</p>}

          {products.map((p) => (
            <div key={p.id} className="vendor-product">
              <img src={p.image} alt={p.title} />
              <div>
                <h4>{p.title}</h4>
                <p>₹{p.price}</p>
                <p>⭐ {p.rating}</p>
              </div>

              <button className="delete-btn" onClick={() => deleteProduct(p.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
