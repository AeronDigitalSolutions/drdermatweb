// pages/cart.tsx
import React, { useState } from "react";
import styles from "@/styles/Cart.module.css";
import { FaTrashAlt, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { useRouter } from "next/router";
import MobileNavbar from "@/components/Layout/MobileNavbar";
import product1 from "@/public/product1.png";
import product2 from "@/public/product2.jpg";

const CartPage: React.FC = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MuscleBlaze Micronised Creatine Monohydrate, Unflavoured 100 g",
      price: 499,
      mrp: 749,
      discount: "33%",
      reward: 10,
      quantity: 1,
      image: product1,
    },
    {
      id: 2,
      name: "GNC Pro Performance Power Protein, 4 lb Double Rich Chocolate",
      price: 3499,
      mrp: 6599,
      discount: "46%",
      reward: 0,
      quantity: 1,
      image: product2,
    },
  ]);

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + item.mrp * item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = totalMRP - totalPrice;

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Logo"
          width={155}
          height={45}
        />

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.active}`}>
            <div className={styles.circle}>
              <FaShoppingCart />
            </div>
            <div className={styles.stepLabelActive}>Cart</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circleGrey}>
              <GoLocation />
            </div>
            <div className={styles.stepLabel}>Address</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circleGrey}>
              <FaCreditCard />
            </div>
            <div className={styles.stepLabel}>Payment</div>
          </div>
        </div>
      </div>

      {/* Mobile-only top section for pin + coupon */}
      <div className={styles.mobileTopOnly}>
        <div className={styles.pinRow}>
          <input
            placeholder="Enter Pin Code"
            className={styles.pinInput}
          />
          <button className={styles.checkBtn}>Check</button>
        </div>

        <div className={styles.couponRow}>
          <span className={styles.couponIcon}>⚙️</span>
          <span>Apply Coupon</span>
        </div>
      </div>

      {/* Main Cart Section */}
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 className={styles.title}>Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <Image
                src={item.image}
                alt={item.name}
                className={styles.productImage}
                width={100}
                height={100}
              />
              <div className={styles.details}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>₹{item.price}</span>
                  <span className={styles.discount}>{item.discount} OFF</span>
                  {item.reward > 0 && (
                    <span className={styles.reward}></span>
                  )}
                </div>
                <div className={styles.mrp}>
                  MRP: <s>₹{item.mrp}</s>
                </div>
                <div className={styles.qtyRow}>
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className={styles.qtyBtn}
                  >
                    −
                  </button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className={styles.qtyBtn}
                  >
                    +
                  </button>
                </div>
                <div className={styles.delivery}>
                  🚚 Expected delivery in 3-4 days
                </div>
              </div>
              <div className={styles.actions}>
                <FaTrashAlt className={styles.icon} />
                <FiHeart className={styles.icon} />
              </div>
            </div>
          ))}
          <div className={styles.continue} onClick={() => router.push('/home/Address')}>
            Continue Shopping
          </div>
        </div>

        {/* Right section (desktop & tab only) */}
        <div className={styles.right}>
          <div className={styles.pinRow + " " + styles.desktopOnly}>
            <input
              placeholder="Enter Pin Code"
              className={styles.pinInput}
            />
            <button className={styles.checkBtn}>Check</button>
          </div>

          <div className={styles.couponRow + " " + styles.desktopOnly}>
            <span className={styles.couponIcon}>⚙️</span>
            <span>Apply Coupon</span>
          </div>

          <button
            className={styles.payBtn}
            onClick={() => router.push("/home/Address")}
          >
            Proceed to Pay ₹{totalPrice}
          </button>

          <div className={styles.summaryBox}>
            <h3 className={styles.summaryTitle}>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Total MRP</span>
              <span>₹{totalMRP}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Discounts <i>ⓘ</i></span>
              <span className={styles.green}>- ₹{discount}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Loyalty Savings <i>ⓘ</i></span>
              <span className={styles.strike}>(₹299)</span>
            </div>
            <div className={styles.saveExtra}>
              Save extra ₹188 <span className={styles.link}>Add Membership</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Convenience Fee <i>ⓘ</i></span>
              <span>₹0</span>
            </div>
            <hr/>
            <div className={styles.totalPay}>
              <span>Payable Amount</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className={styles.savingsNote}>
              You will Save ₹{discount} & Earn ₹10 HK Cash on this order
            </div>
          </div>
        </div>

        <MobileNavbar />
      </div>
    </>
  );
};

export default CartPage;
