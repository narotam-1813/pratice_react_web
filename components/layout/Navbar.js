import { useRouter } from "next/router";
import NavItem from "./NavItem";

export default function Navbar() {
  const router = useRouter();
  const {pathname} = router;

  return (
    <nav className={`navBar is-flex is-align-items-center is-justify-content-center p-2 ${pathname === "/" ? "navBar__mobileStyles": ""} `}>
      <NavItem title="Home" url="/" icon="bi bi-house" />
      <NavItem title="Item" url="/jewelry" icon="bi bi-gem" />
      <NavItem title="Cash" url="/loans" icon="bi bi-cash" />
      <NavItem title="Store" url="/pawns" icon="bi bi-briefcase" />
    </nav>
  );
}
