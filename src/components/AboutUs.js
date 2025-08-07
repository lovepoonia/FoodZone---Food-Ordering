import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🚀 Our Mission</h2>
        <p className="text-lg">
          Welcome to <strong>FoodZone</strong>, this is a food ordering website
          built using a live API.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Built With</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>React.js</li>
          <li>Redux Toolkit</li>
          <li>Tailwind CSS</li>
          <li>React Router</li>
          <li>JavaScript (ES6+)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">👨‍🍳 Meet the Developer</h2>
        <p className="text-lg">
          Hi, I'm <strong>Love Poonia</strong>, a passionate front-end developer
          learning and building exciting web apps. This project is part of my
          journey to mastering React and building real-world applications.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">📦 Upcoming Features</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Add to favorites</li>
          <li>Grocery & daily essentials support</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
