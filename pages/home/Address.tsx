// pages/checkout/address.tsx
import React, { useState } from "react";
import styles from "@/styles/user/address.module.css";
import { FaUserCircle, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineEdit, MdOutlineRadioButtonChecked } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import MobileNavbar from "@/components/Layout/MobileNavbar";

const AddressPage: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>

<Image
        className={styles.logo}
        src="/logo.png"
        alt="Logo"
        width={155}
        height={45}
      />
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.circleFilled}><FaShoppingCart /></div>
            <div className={styles.labelActive}>Cart</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circleOutlined}><GoLocation /></div>
            <div className={styles.label}>Address</div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.step}>
            <div className={styles.circleGrey}><FaCreditCard /></div>
            <div className={styles.labelDisabled}>Payment</div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {/* User Info */}
          <div className={styles.userCard}>
            <FaUserCircle className={styles.avatar} />
            <div className={styles.userInfo}>
              <div className={styles.username}>User</div>
              <div className={styles.secureLogin}>
                <BsShieldCheck className={styles.shield} />
                You are securely logged in
              </div>
            </div>
            <div className={styles.phone}>📞 +91 85990000000</div>
          </div>

          {/* Email */}
          <h4>Your order updates & invoice will be sent to</h4>
          <div className={styles.emailCard}>
            <HiOutlineMail size={20} />
            <span>demo@gmail.com</span>
            <button className={styles.changeBtn}>Change</button>
          </div>

          {/* Address Box */}
          <div className={styles.addressBox}>
            <div className={styles.addressHeader}>
              <h3>Delivery Address</h3>
              <span className={styles.addLink} onClick={() => setShowModal(true)}>+ Add Address</span>
            </div>

            <div className={styles.addressCard}>
              <div className={styles.radioRow}>
                <MdOutlineRadioButtonChecked className={styles.radio} />
                <div className={styles.addressText}>
                 Sector 63 Noida Noida Up,<br />NOIDA, UTTAR PRADESH, 201301<br />+91 85990000000
                </div>
                <MdOutlineEdit className={styles.editIcon} />
              </div>
              <div className={styles.tagRow}><strong>Home</strong></div>
              <button className={styles.deliverBtn} onClick={() => router.push("/checkout/payment")}>Deliver Here</button>
            </div>
          </div>

          {/* Payment Placeholder */}
          <div className={styles.paymentBox}>
            <h3>Payment Method</h3>
            <p>Enter delivery address to access payment options</p>
          </div>
        </div>

        {/* Right Summary */}
        <div className={styles.right}>
          <h3 className={styles.summaryTitle}>Order Summary <span>(2 items)</span></h3>
          <div className={styles.summaryRow}><span>Total MRP</span><span>₹7,348</span></div>
          <div className={styles.summaryRow}><span>Total Discounts <i>ⓘ</i></span><span className={styles.green}>- ₹3,350</span></div>
          <div className={styles.summaryRow}><span>Convenience Fee <i>ⓘ</i></span><span>₹0</span></div>
          <hr />
          <div className={styles.summaryTotal}><span>Payable Amount</span><span>₹3,998</span></div>
          <div className={styles.savingsNote}>You will Save ₹3,350 & Earn ₹10 HK Cash on this order</div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <div className={styles.modalHeader}>
              <h3>Add New Address</h3>
              <IoClose className={styles.closeBtn} onClick={() => setShowModal(false)} />
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalGrid}>
                <div>
                  <label>Name <span>*</span></label>
                  <input type="text" placeholder="User" />
                </div>
                <div>
                  <label>Mobile No. <span>*</span></label>
                  <input type="text" placeholder="Enter Mobile" />
                </div>
              </div>
              <div>
                <label>Address(Area & Street) <span>*</span></label><br/>
                <input type="textarea" placeholder="Type Your Address" />
              </div>
              <div className={styles.modalGrid}>
                <div>
                  <label>Landmark</label>
                  <input type="text" placeholder="Enter Landmark" />
                </div>
                <div>
                  <label>Pincode <span>*</span></label>
                  <input type="text" placeholder="Enter pincode" />
                </div>
              </div>
              <div>
                <label>Address Type</label>
                <div className={styles.addressTypeBtns}>
                  <button className={styles.selected}>Home</button>
                  <button>Office</button>
                  <button>Others</button>
                </div>
              </div>
              <button className={styles.saveDeliver}>Save & Deliver</button>
            </div>
          </div>
          <MobileNavbar></MobileNavbar>
        </div>
      )}
    </>
  );
};

export default AddressPage;
