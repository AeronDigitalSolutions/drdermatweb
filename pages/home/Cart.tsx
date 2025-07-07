// CartPage.tsx
import React from "react";
import styles from "@/styles/Cart.module.css";
import { Plus, Minus } from "lucide-react";
import Topbar from "@/components/Layout/Topbar";
import Footer from "@/components/Layout/Footer";

const CartPage = () => {
  return (
    <>
    <Topbar/>
    <div className={styles.cartContainer}>
      <h2 style={{color: "grey", paddingLeft: "10%"}}>Your Cart</h2>
      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {[1, 2].map((_, index) => (
            <div key={index} className={styles.cartItem}>
              <img src="/product1.png" alt="Product" className={styles.productImage} />
              <div>
                <p className={styles.productTitle}>Product 1</p>
                <p className={styles.productCategory}>Hair</p>
                <p className={styles.productPrice}>$49.99</p>
                <div className={styles.quantityControls}>
                    <button className={styles.counterButton}><Minus size={16} strokeWidth={4} /></button>
                    <span className={styles.countDisplay}>1</span>
                    <button className={styles.counterButton}><Plus size={16} strokeWidth={4} /></button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className={styles.orderSummary}>
          <h3>Order Summary <span>(1 item)</span></h3>
          <div className={styles.summaryRow}><span>Total MRP</span><span>$100</span></div>
          <div className={styles.summaryRow}><span>Cart Discount</span><span>-$15</span></div>
          <div className={styles.summaryRow}><span>Convenience Fee</span><span>$6.57</span></div>
          <hr />
          <div className={styles.summaryRowTotal}><span>Total</span><span>$81.57</span></div>
          <p className={styles.freeShipping}>Free Domestic Shipping</p>
          <button className={styles.checkoutBtn}>CHECKOUT</button>

          <div className={styles.couponSection}>
          <span>Have Coupon?</span>
          <button className={styles.applyCoupon}>Apply Now</button>
        </div>
        </div>
      </div>

      <div className={styles.bottomActions}>
        <button className={styles.savingsInfo}>You are saving X amount on this purchase.</button>
        

        <div className={styles.paymentMethods}>
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="MasterCard" />
          <img src="/rupay.png" alt="RuPay" />
          <img src="/netbanking.png" alt="NetBanking" />
        </div>
        <p className={styles.securePayment}>100% Secure Payment</p>

        <div className={styles.socialIcons}>
          <img src="/fblogo.png" alt="Facebook" />
          <img src="/xlogo.png" alt="Twitter" />
          <img src="/ytlogo.png" alt="YouTube" />
        </div>

        <div className={styles.deliverySection}>
          <p>Delivering to your address</p>
          <button className={styles.payNowBtn}>Click To Pay</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CartPage;
