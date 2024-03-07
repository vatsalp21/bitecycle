import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-500 text-white">
      <img
        src="https://i.ibb.co/PG3dXrP/istockphoto-944319460-640x640-removebg-preview.png"
        alt="Page not found"
        className="max-w-sm w-full"
      />
      <h1 className="text-3xl font-bold mt-8">404 - Page Not Found</h1>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
