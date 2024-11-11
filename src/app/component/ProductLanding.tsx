'use client'

import React from 'react';

const ProductLanding = () => {
  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { id: 1, name: 'Boots', price: '200USD', image: '/images/s_enhanced.jpeg' },
    { id: 2, name: 'Nike Air Force', price: '200USD', image: '/images/s1.webp' },
    { id: 3, name: 'Prada Monolith Leather Lace-Up', price: '200USD', image: '/images/s2.jpg' },
    { id: 4, name: 'Chelsea Boots', price: '200USD', image: '/images/s3.jpg' },
    { id: 5, name: 'Sole Sneakers Black Gold-9.5', price: '200USD', image: '/images/s4.jpg' },
    { id: 6, name: 'Prada Monolith Leather short', price: '200USD', image: '/images/s5.jpg' },
    { id: 7, name: 'Luis Viutton', price: '200USD', image: '/images/s6.jpg' },
    { id: 8, name: 'Beige & Navy TC 7900 Sneakers', price: '200USD', image: '/images/s7.jpg' },
    { id: 9, name: 'Nike Air Jordan I', price: '200USD', image: '/images/s8.jpg' },
    { id: 10, name: 'Adidas Samba', price: '200USD', image: '/images/s9.jpg' },
    { id: 11, name: 'GAGALU Men Leather Shoes', price: '200USD', image: '/images/s10.jpg' },
    { id: 12, name: 'Air Glide Sneakers', price: '200USD', image: '/images/s11.jpg' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 to-purple-600 relative p-4 flex items-center justify-center">
        {/* Background neon lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-1/4 w-1 h-[200%] bg-blue-400 rotate-45 blur-sm"></div>
          <div className="absolute right-0 top-1/4 w-1 h-[200%] bg-pink-400 rotate-45 blur-sm"></div>
        </div>

        {/* Main card container */}
        <div className="relative w-full max-w-4xl bg-black/30 backdrop-blur-md rounded-3xl overflow-hidden">
          {/* Navigation */}
          <nav className="flex justify-end p-6 space-x-8">
            <button className="text-gray-300 text-sm hover:text-white transition-colors uppercase tracking-wider">
              HOME
            </button>
            <button 
              onClick={scrollToCollection}
              className="text-gray-300 text-sm hover:text-white transition-colors uppercase tracking-wider"
            >
              COLLECTION
            </button>
            <button 
              onClick={scrollToVideo}
              className="text-gray-300 text-sm hover:text-white transition-colors uppercase tracking-wider"
            >
              ABOUT
            </button>
            <button 
              onClick={scrollToFooter}
              className="text-gray-300 text-sm hover:text-white transition-colors uppercase tracking-wider"
            >
              CONTACT
            </button>
          </nav>

          {/* Content container */}
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
            {/* Left content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className= "text-white text-6xl md:text-7xl font-bold">
              Luis Viutton
              </h1>
              <div className="text-white text-3xl font-bold">
                $200
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                 Nothing as fly, nothing as comfortable, nothing as proven—the Luis Viutton stays true to its roots 
                with the iconic Waffle sole, stitched overlays and classic TPU accents.
              </p>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm transition-all">
                ORDER NOW
              </button>
            </div>

            {/* Right content - Product Display */}
            <div className="w-full md:w-1/2 relative">
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              
              {/* Product image */}
              <div className="relative transform hover:-rotate-12 transition-transform duration-500">
                <img
                  src="/images/shoes-removebg-preview.png"
                  alt="Nike Shoe"
                  className="object-contain w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <div id="collection" className="min-h-screen bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center group">
                <div className="relative mb-4 overflow-hidden w-48 h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 transition-colors">
                  Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div id="video-section" className="relative min-h-screen bg-black flex items-center">
        <video
          src="/images/vid.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="relative z-10 p-8 md:p-12 text-white flex flex-col items-start max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">KIGALI ONLINE SHOES</h2>
          <p className="text-lg mb-6">
            Ahead of its time, the iconic Shox TL pushes the boundaries of style. Just name your taste, and KIGALI ONLINE BEST SHOES we got you.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>

      {/* Footer Section */}
      <div id="footer" className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Hours</h4>
            <p>Monday - Sunday</p>
            <p>8am - 10pm</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Phone</h4>
            <p>(250) 729644078</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Address</h4>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-8 text-center">
          <h4 className="text-lg font-semibold mb-4">Subscribe for 10% off</h4>
          <form className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-auto px-4 py-2 mb-4 md:mb-0 border border-gray-500 rounded-md text-black"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductLanding;
