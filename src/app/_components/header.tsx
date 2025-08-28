import Link from "next/link";
import "@fontsource/satisfy";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold  mb-20 mt-8 flex items-center font-satisfy">
      <Link href="/" className="hover:underline">
        CréationDiane
      </Link>
    </h2>
  );
};

export default Header;
