import React from 'react';
import innovationIMG from '../assets/images/innovation.jpg';
import securityIMG from '../assets/images/security.jpg';
import supportIMG from '../assets/images/support.jpg';


const Features = () => {
  return (
    <section className="py-20 bg-white text-gray-900" id="features">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p>Leading the market with groundbreaking technology solutions.</p>
            <a href="" className="block mt-4 p-2 border-2 border-gray-300 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src={innovationIMG} alt="Innovation" className="h-48 rounded-lg object-contain mx-auto" />
            </a>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Security</h3>
            <p>Top-tier security measures to protect your data.</p>
            <a href="" className="block mt-4 p-2 border-2 border-gray-300 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src={securityIMG} alt="Security" className="h-48 rounded-lg object-contain mx-auto" />
            </a>
          </div>
          <div className="text-center p-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Support</h3>
            <p>24/7 customer support to assist you whenever needed.</p>
            <a href="" className="block mt-4 p-2 border-2 border-gray-300 rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <img src={supportIMG} alt="Support" className="h-48 rounded-lg object-contain mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
