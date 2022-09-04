import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { clearUser, updateUsername } from "../app/slices/userSlice";
const products = [
  {
    title: "Dog Illustrator",
    isPremium: true,
    url: "/somewhere",
    img: "soruceof theimage",
  },
];
export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      {products.map((product) => {
        return <ProductCard title={product.title} />;
      })}
      {user.username}
      {user.role}
      <div>
        <button
          onClick={() => dispatch(clearUser)}
          className="bg-indigo-500 rounded-md shadow-lg p-1 text-white"
        >
          Clear User
        </button>
      </div>
    </div>
  );
}
