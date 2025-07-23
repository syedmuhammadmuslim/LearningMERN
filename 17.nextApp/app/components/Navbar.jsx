// app/components/Navbar.jsx
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};
