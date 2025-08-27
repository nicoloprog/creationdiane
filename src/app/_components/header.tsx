import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold  mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        CréationDiane
      </Link>
    </h2>
  );
};

export default Header;
