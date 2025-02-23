import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
