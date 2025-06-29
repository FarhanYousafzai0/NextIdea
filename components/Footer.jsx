import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import SearchForm from './SearchForm';

const Footer = () => {
  return (
    <footer className='bg-pink-400 min-h-[530px] w-screen pattern flex justify-center items-end flex-col py-10 px-6 text-center relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 to-pink-500/30"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-20 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-30 translate-y-30"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="mb-12">
          {/* Brand section */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              DriveFounders
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Where innovative ideas meet passionate founders. Share your vision, discover inspiration, and connect with the entrepreneurial community.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to Share Your Next Big Idea?
              </h3>
              <p className="text-pink-100 mb-6">
                Join thousands of founders sharing innovative concepts and building the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white cursor-pointer text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-all duration-200 hover:scale-105 transform shadow-lg">
                  Share Your Idea
                </button>
                <button className="px-8 py-3 bg-pink-500/20 text-white cursor-pointer rounded-full font-semibold hover:bg-pink-500/30 transition-all duration-200 border border-white/30 backdrop-blur-sm">
                  Explore Ideas
                </button>
              </div>
            </div>
          </div>

          {/* Footer links grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Community */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Community</h4>
              <ul className="space-y-3">
                {['Browse Ideas', 'Top Founders', 'Success Stories', 'Featured Projects', 'Trending Topics'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-pink-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {['Startup Guide', 'Founder Tools', 'Pitch Templates', 'Legal Resources', 'Funding Tips'].map((resource) => (
                  <li key={resource}>
                    <a 
                      href="#" 
                      className="text-pink-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Blog', 'Careers', 'Press Kit'].map((company) => (
                  <li key={company}>
                    <a 
                      href="#" 
                      className="text-pink-100 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {company}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-white mb-4">Stay in the Loop</h4>
            <p className="text-pink-100 mb-6 max-w-md mx-auto">
              Get weekly insights, featured ideas, and founder spotlights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-center sm:text-left"
              />
              <button className="px-8 py-3 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-200 hover:scale-105 transform whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social media */}
          <div className="mb-8">
            <p className="text-pink-100 mb-4">Connect with us</p>
            <div className="flex justify-center space-x-4">
              {[
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Github, href: '#', label: 'GitHub' }
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-100 hover:text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 transform border border-white/20"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
            <div className="flex items-center space-x-2 text-pink-100">
              <span>© 2025 DriveFounders. Built with</span>
              <Heart size={16} className="text-red-300 animate-pulse" />
              <span>for founders everywhere</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-pink-100 hover:text-white transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;