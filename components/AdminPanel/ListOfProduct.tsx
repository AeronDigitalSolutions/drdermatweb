"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Dashboard/productlist.module.css";

interface Product {
  _id: string;
  name: string;
  category: string;
  company: string;
  price: string;
  discountPrice: string;
  quantity: string;
  description: string;
  image: string; // base64
}

function ListOfProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      alert("Failed to delete product.");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingProduct || !e.target.files?.[0]) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditingProduct({ ...editingProduct, image: reader.result as string });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!editingProduct) return;
    const { name, value } = e.target;
    setEditingProduct({ ...editingProduct, [name]: value });
  };

  const handleUpdateSubmit = async () => {
    if (!editingProduct) return;

    if (
      parseFloat(editingProduct.discountPrice) >
      parseFloat(editingProduct.price)
    ) {
      alert("Discount price cannot be greater than original price.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${editingProduct._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingProduct),
        }
      );
      if (!res.ok) throw new Error("Failed to update product.");
      const updated = await res.json();
      setProducts((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );
      setEditingProduct(null);
    } catch (err) {
      alert("Failed to update product.");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Product List</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product._id} className={styles.card}>
            <img
              src={
                product.image || "https://via.placeholder.com/200?text=No+Image"
              }
              alt={product.name}
              className={styles.image}
            />

            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.company}>{product.company}</p>
            <p className={styles.category}>{product.category}</p>

            <div className={styles.priceRow}>
              <span className={styles.discount}>₹{product.price}</span>
              {product.discountPrice &&
                product.discountPrice !== product.price && (
                  <span className={styles.original}>
                    ₹{product.discountPrice}
                  </span>
                )}
            </div>

            <p className={styles.quantity}>Available: {product.quantity}</p>

            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className={styles.buttonGroup}>
              <button
                className={styles.updateBtn}
                onClick={() => setEditingProduct(product)}
              >
                Update
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingProduct && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit Product</h3>
            <input
              name="name"
              value={editingProduct.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              name="company"
              value={editingProduct.company}
              onChange={handleInputChange}
              placeholder="Company"
            />
            <input
              name="category"
              value={editingProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
            />
            <input
              name="price"
              value={editingProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
            />
            <input
              name="discountPrice"
              value={editingProduct.discountPrice}
              onChange={handleInputChange}
              placeholder="Discount Price"
            />
            <input
              name="quantity"
              value={editingProduct.quantity}
              onChange={handleInputChange}
              placeholder="Quantity"
            />
            <textarea
              name="description"
              value={editingProduct.description}
              onChange={handleInputChange}
              placeholder="Description"
              rows={4}
            ></textarea>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            <div className={styles.modalButtons}>
              <button onClick={handleUpdateSubmit}>Save</button>
              <button onClick={() => setEditingProduct(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListOfProduct;
