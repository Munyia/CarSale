import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false); // Title animation
  const [isContentVisible, setIsContentVisible] = useState(false); // Slide-in animation

  useEffect(() => {
    document.title = 'Terms of Service';

    setTimeout(() => {
        setIsTitleVisible(true); // Trigger title animation
        setIsContentVisible(true); // Trigger content slide-in
      }, 100); // Slight delay to start animations after component mounts
    }, []);
  
   

  return (
    <div className="bg-body min-h-screen">
      <Header />

        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
          <h1
            className={`text-3xl sm:text-4xl font-bold text-center mb-8 text-but transition-opacity duration-1000 ${
              isTitleVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Terms of Service
          </h1>

   
          <div
            className={`space-y-6 transform transition-transform duration-1000 ${
              isContentVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
    
            <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
                1. Introduction
              </h2>
              <p className="text-black">
                ****************************************************************************************************************
              </p>
            </section>

            <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
                2. Intellectual Property Rights
              </h2>
              <p className="text-black">
                ****************************************************************************************************************
              </p>
            </section>

            <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
                3. Restrictions
              </h2>
              <p className="text-black">
                ****************************************************************************************************************
              </p>
            </section>

            <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
                4. Limitation of Liability
              </h2>
              <p className="text-black">
                ****************************************************************************************************************
              </p>
            </section>

            <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-medium text-but mb-4">
                5. Governing Law
              </h2>
              <p className="text-black">
                ****************************************************************************************************************
              </p>
            </section>
          </div>
        </div>

      <Footer />
    </div>
  );
};

export default Terms;
