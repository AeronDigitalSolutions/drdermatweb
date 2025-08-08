// Topbar.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/components/Layout/Topbar.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ShoppingCart, MapPin, Menu } from "lucide-react";

interface TopbarProps {
  hideHamburgerOnMobile?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ hideHamburgerOnMobile }) => {
  const router = useRouter();
  const session = useSession();

  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (session.status !== "loading") {
      setLoading(false);
    }
    if (session.status === "authenticated") {
      setAuthenticated(true);
      setUser(session.data.user);
    }
  }, [session]);

  if (loading) {
    return <div className={styles.topbar}>Loading...</div>;
  }

  const handleClick = () => {
    router.push("/home/Cart");
  };

  return (
    <div className={styles.topbar}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Logo"
        width={155}
        height={45}
      />

      <div
        className={`${styles.hamburger} ${hideHamburgerOnMobile ? styles.hideOnMobile : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={28} />
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <Link href="/home">Home</Link>
        <Link href="/home/findClinicsPage">Book Appointment</Link>
        <Link href="/quiz/ques1">Your Result</Link>
        <Link href="/user/profile">Care Plan</Link>

        <div>
          <MapPin size={20} color="#155E95" />
        </div>

        {authenticated ? (
          <Link href="">{user.user.name?.toUpperCase()}</Link>
        ) : (
          <>
            <Link href="/login/phone">Login</Link>
            <Link href="/signup">Register</Link>
          </>
        )}

        <div className={styles.cartInfo} onClick={handleClick}>
          <ShoppingCart size={24} />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
