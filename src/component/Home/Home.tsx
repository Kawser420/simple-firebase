import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">This is Home</h3>
        <p className="text-gray-600">
          Welcome to the updated React + TypeScript + Tailwind application!
        </p>
      </div>
    </div>
  );
};

export default Home;
