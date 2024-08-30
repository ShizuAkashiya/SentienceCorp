import React from 'react';

const Main = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-gray-800 text-white py-20" id="home" style={{ backgroundImage: `url('./src/assets/images/main-image.jpg')` }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Welcome to SentienceCorp</h1>
          <p className="text-lg mb-6">Leading the future with innovative technology solutions.</p>
          <a href="#features" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Main;
