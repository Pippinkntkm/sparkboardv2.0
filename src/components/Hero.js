import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-primary-600">SparkBoard</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            The modern platform that sparks creativity and drives innovation. 
            Build, collaborate, and succeed with our powerful tools.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-3">
              Start Your Journey
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20"></div>
    </section>
  );
};

export default Hero; 