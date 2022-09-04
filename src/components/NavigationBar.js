import { Link } from "react-router-dom";

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Pokemons", url: "/pokemons" },
  { name: "Contacts", url: "/contact" },
];

export default function NavigationBar() {
  return (
    <nav className="bg-slate-600 text-white">
      <ul className="flex p-4">
        {links.map((link) => {
          return (
            <li className="text-xl mx-2">
              <Link to={link.url}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
