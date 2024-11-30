import Link from "next/link";
import React from "react";

const Home = () => {
  const paths = [
    {
      name: "Hompage",
      url: "/products",
    },
    {
      name: "Product Details",
      url: "/products/details",
    },
    {
      name: "Cart",
      url: "/cart",
    },
    {
      name: "Login",
      url: "/signin",
    },
    {
      name: "Register",
      url: "/signup",
    },
    {
      name: "Shipping",
      url: "/shipping",
    },
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Add new address",
      url: "/address/new",
    },
    // {
    //   name: "Update Profile",
    //   url: "/profile/update",
    // },
    // {
    //   name: "Update Password",
    //   url: "/password/update",
    // },
    {
      name: "User Order",
      url: "/orders",
    },
    {
      name: "New Product",
      url: "/products/new",
    },
    {
      name: "All Products Admin",
      url: "/admin/products",
    },
    {
      name: "Upload Images",
      url: "/admin/upload-images",
    },
    {
      name: "Orders Admin",
      url: "/admin/orders",
    },
    // {
    //   name: "Update Order",
    //   url: "/admin/order/update",
    // },
    {
      name: "Users Admin",
      url: "/admin/users",
    },
    // {
    //   name: "Update User Admin",
    //   url: "/admin/user/update",
    // },
  ];

  return (
    <div className="text-center">
      <h1 className="my-10 text-3xl font-bold">Components List</h1>
      {paths?.map((path) => (
        <Link href={path.url}>
          <p className="text-xl">{path.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
