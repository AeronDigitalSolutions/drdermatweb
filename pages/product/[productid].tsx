import React from "react";
import { useRouter } from "next/router";
import { productsCardListData } from "@/data/productsCardListData";
import { productResultData } from "@/data/productResultData";
import styles from "@/styles/Products.module.css"; // Create this CSS file
import Topbar from "@/components/Layout/Topbar"; // Create this component
import { useState } from "react";
import Footer from "@/components/Layout/Footer";
import reviews from "@/data/reviews"; // Import reviews data
import Ratings from "@/components/Layout/Reviews";

const icons = [
  { label: "Dye Free", img: "/icons/dye-free.png" },
  { label: "Mineral Oil Free", img: "/icons/mineral-free.png" },
  { label: "Paraben Free", img: "/icons/paraben-free.png" },
  { label: "Sulfate Free", img: "/icons/sulfate-free.png" },
];

const ProductDetail = () => {
  const router = useRouter();
  const { productid } = router.query;
  //extract product id from url
  const numericProductId = parseInt(productid as string);

  //review data associated with the product
  const productResult = productResultData.find(
    (result) => result.productId === numericProductId
  );

  const [activeTab, setActiveTab] = useState("Result"); // State to manage active tab

  const product = productsCardListData.find((p) => p.id === Number(productid));
  const [selectedImage, setSelectedImage] = useState(product?.image[0]);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      {/* Header */}
      <Topbar />

      {/* <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search Products for you"
          className={styles.searchInput}
        />
        <Search className={styles.searchIcon} size={20} />
      </div>
    </div> */}

      <div className={styles.productDetailPage}>
        {/* Product Showcase */}
        <section className={styles.productHeader}>
          <div className={styles.imageGallery}>
            <img
              src={selectedImage}
              alt={product.name}
              className={styles.mainImage}
            />

            {/* STATIC RENDERING */}
            {/* <div className={styles.thumbnailContainer}>
          <img src={product.image} alt="thumb1" className={styles.thumbnail} />
          <img src={product.image} alt="thumb2" className={styles.thumbnail} />
          <img src={product.image} alt="thumb3" className={styles.thumbnail} />
        </div> */}

            <div className={styles.thumbnailContainer}>
              {product.image.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumbNail ${index + 1}`}
                  className={`${styles.thumbnail} ${
                    selectedImage === img ? styles.activeThumbnail : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productRating}>★ {product.rating}</p>
            <p>{product.size}</p>
            <div className={styles.productPrice}>
              ₹{product.price}
              <span className={styles.mrp}>₹{product.mrp}</span>
              <span className={styles.discount}>{product.discount}</span>
            </div>
            <p className={styles.productDescription}>{product.description}</p>
            <button className={styles.addToCartButton}>Buy Now</button>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        </section>

        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Result" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Result")}
          >
            Result
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Details" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Details")}
          >
            Details
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "Reviews" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("Reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      {activeTab === "Details" && (
        <section>
          <div className={styles.detailsContainer}>
            <div className={styles.codShipping}>
              <div>
                <img src="/icons/cod.png" alt="COD" />
                <p>
                  <strong>COD Available</strong>
                  <br />@ ₹19 per Order
                </p>
              </div>
              <div>
                <img src="/icons/shipping.png" alt="Shipping" />
                <p>
                  <strong>Free Shipping</strong>
                  <br />
                  Above ₹399
                </p>
              </div>
            </div>

            <div className={styles.contactSection}>
              <p>Have Queries or Concerns? Contact Us</p>
              <button className={styles.contactButton}>Contact Us</button>
            </div>

            <div className={styles.features}>
              {icons.map((item, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <img src={item.img} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className={styles.paymentSection}>
              <p>Pay Using</p>
              <img src="/icons/payment-methods.png" alt="Payments" />
              <div className={styles.securePayment}>
                <img src="/icons/secure-payment.png" alt="Secure Payment" />
                <p>100% Secure Payment</p>
              </div>
            </div>

            <div className={styles.socials}>
              <img src="/icons/socials.png" alt="Social Icons" />
            </div>
          </div>
        </section>
      )}

      {activeTab === "Reviews" && (
        <section>
          <div className={styles.reviewsContainer}>
            {activeTab === "Reviews" && (
              <section className={styles.reviewSection}>
                {/* ... static review stats ... */}

                <Ratings />

                {reviews.map(
                  (
                    review: {
                      initials:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                      name:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                      verified: any;
                      date:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                      rating: number;
                      title:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                      content:
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                    },
                    idx: React.Key | null | undefined
                  ) => (
                    <div className={styles.reviewCard} key={idx}>
                      <div className={styles.avatar}>{review.initials}</div>
                      <div className={styles.reviewContent}>
                        <div className={styles.reviewTop}>
                          <strong>{review.name}</strong>
                          {review.verified && (
                            <span className={styles.verified}>
                              Verified User
                            </span>
                          )}
                          <span className={styles.reviewDate}>
                            {review.date}
                          </span>
                        </div>
                        <div className={styles.reviewStars}>
                          {"★".repeat(review.rating)}
                        </div>
                        <p className={styles.reviewText}>
                          <strong>{review.title}</strong>
                          <br />
                          {review.content}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </section>
            )}
          </div>
        </section>
      )}

      {activeTab === "Result" && (
        <div className={styles.resultTabContainer}>
          {/* Section 1 */}

          {productResult ? (
            productResult.heading.map((heading, idx) => (
              <div className={styles.resultRow} key={idx}>
                <img
                  src={productResult.image[idx]}
                  alt={heading}
                  className={styles.resultImage}
                />
                <div className={styles.resultText}>
                  <h3 className={styles.resultTitle}>
                    {productResult.heading[idx]}
                  </h3>
                  <p className={styles.productDescription}>
                    {productResult.description[idx]}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for this product...</p>
          )}
        </div>
      )}

      {/* Key Ingredients */}
      <div className={styles.ingredientsSection}>
        <h2 className={styles.ingredientsHeading}>Key Ingredients</h2>

        <div className={styles.ingredientsList}>
          {productResult ? (
            productResult.ingredientsImg.map((img, idx) => (
              <div className={styles.ingredientItem} key={idx}>
                <img
                  src={productResult.ingredientsImg[idx]}
                  alt={productResult.ingredientsDescription[idx]}
                  className={styles.ingredientImage}
                />
                <p className={styles.ingredientText}>
                  {productResult.ingredientsDescription[idx]}
                </p>
              </div>
            ))
          ) : (
            <p>No ingredients found for this product...</p>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProductDetail;
