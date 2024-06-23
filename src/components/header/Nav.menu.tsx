import Link from "next/link";
import BurgerMenu from "./Burger.menu";

const Nav = () => {
  return (
    <div className="flex items-center mt-4 justify-center sm:justify-end">
      <nav>
        <ul className="flex gap-4 sm:hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </div>
  );
};

export default Nav;
