import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/ProductList.module.css";
import productImg from "@/public/product1.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import MobileNavbar from "@/components/Layout/MobileNavbar";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";

interface Product {
  id: number;
  isBestseller: boolean;
  image: StaticImageData[];
  name: string;
  size: string;
  price: number;
  mrp: number;
  discount: string;
  link: string;
  buttonText?: string;
  categories: number[];
  description: string;
  rating: number;
  long_description: string;
  buttonAction?: () => void;
}

const sidebarItems = [
  { id: 1, name: "Face Wash", image: productImg },
  { id: 2, name: "Moisturizer", image: productImg },
  { id: 3, name: "Serum", image: productImg },
  { id: 4, name: "Lip Balm", image: productImg },
  { id: 5, name: "Face Wash", image: productImg },
  { id: 6, name: "Moisturizer", image: productImg },
  { id: 7, name: "Serum", image: productImg },
  { id: 8, name: "Lip Balm", image: productImg },
  
];

const ProductListingPage: React.FC = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const productsPerPage = 16;

  const products: Product[] = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    isBestseller: index % 5 === 0,
    image: [productImg],
    name: `Sunscreen SPF 50 - ${index + 1}`,
    size: "50ml",
    price: 499,
    mrp: 699,
    discount: "29% off",
    link: `/product/${index + 1}`,
    buttonText: "Add to Cart",
    categories: [2],
    description: "SPF 50 sunscreen",
    rating: 4.0,
    long_description: "Protects your skin from sun damage.",
  }));

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const buttonAction = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    event.preventDefault();
    alert(`${name} added to cart!`);
  };

  return (
    <>
      <Topbar />
      <section className={styles.shopSection}>
        <div className={styles.layoutWrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Categories</h3>
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className={styles.sidebarCard}
                onClick={() => setSelectedCategory(item.name)}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.sidebarImage}
                />
                <p className={styles.sidebarName}>{item.name}</p>
              </div>
            ))}
          </aside>

          {/* Product Grid */}
          <div style={{ width: "100%" }}>

<div className={styles.headerRow}>
            <h1 className={styles.categoryHeading}>{selectedCategory}</h1>
  <div className={styles.searchBar}>
    <input
      type="text"
      placeholder="Search products..."
      className={styles.searchInput}
    />
    <span className={styles.searchIcon}>🔍</span>
  </div>
</div>


            <div className={styles.productGrid}>
              {paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className={styles.productCard}
                  onClick={() => router.push(`/product-detail`)}
                >
                  <div className={styles.productItem}>
                    {product.isBestseller && (
                      <span className={styles.bestsellerBadge}>
                        Bestseller <sup style={{ fontSize: "0.8em" }}>✶</sup>
                      </span>
                    )}
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productSize}>{product.size}</p>
                    <div className={styles.productPriceContainer}>
                      <p className={styles.productPrice}>₹{product.price}</p>
                      <p className={styles.productMrp}>₹{product.mrp}</p>
                      <p className={styles.productDiscount}>{product.discount}</p>
                    </div>
                    <button
                      className={styles.productButton}
                      onClick={(e) => buttonAction(e, product.name)}
                    >
                      {product.buttonText || "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className={styles.paginationContainer}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`${styles.paginationButton} ${
                currentPage === index + 1 ? styles.activePage : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      </section>
      <MobileNavbar />
      <Footer />
    </>
  );
};

export default ProductListingPage;
