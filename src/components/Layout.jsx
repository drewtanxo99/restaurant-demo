import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, navDark = true }) {
  return (
    <div style={{ background: "#d8cbb8", minHeight: "100vh" }}>
      <Nav dark={navDark} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
