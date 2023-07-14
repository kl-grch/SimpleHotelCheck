import Image from "next/image";
import "./header.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link href="/">
        <div className="header__label">Simple Hotel Check</div>
      </Link>
      <div className="header__logout">
        <div className="logout__label">Выйти</div>
        <div className="logout__icon">
          <Image src="/icons/logout.svg" alt="logout" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
