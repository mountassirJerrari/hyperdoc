import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // Show success message
    alert("Message sent successfully!");
  };

  return (
    <motion.section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl w-full mx-auto">
        <motion.h2 
          className="font-orbitron text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Contact <span className="text-space-accent">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="card card-hover"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h3 className="card-title text-2xl mb-8 text-space-cyan">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-space-cyan/10 flex items-center justify-center mr-4 group-hover:bg-space-cyan/20 transition-colors">
                  <Mail className="text-space-cyan" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:mountassir.jerrari@gmail.com" 
                    className="text-white hover:text-space-cyan transition-colors"
                  >
                    mountassir.jerrari@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-space-purple/10 flex items-center justify-center mr-4 group-hover:bg-space-purple/20 transition-colors">
                  <MapPin className="text-space-purple" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Location</h4>
                  <span className="text-gray-300">Mohammedia, Morocco</span>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-space-mint/10 flex items-center justify-center mr-4 group-hover:bg-space-mint/20 transition-colors">
                  <Phone className="text-space-mint" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium mb-1">Phone</h4>
                  <a href="tel:+212600000000" className="text-gray-300 hover:text-space-mint transition-colors">
                    +212 6 00 00 00 00
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-orbitron text-lg mb-5">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                <motion.a 
                  href="https://github.com" 
                  className="w-12 h-12 rounded-xl bg-space-secondary/70 flex items-center justify-center hover:bg-space-cyan/10 transition-colors group"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub className="text-gray-400 group-hover:text-space-cyan transition-colors" size={20} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  className="w-12 h-12 rounded-xl bg-space-secondary/70 flex items-center justify-center hover:bg-space-purple/10 transition-colors group"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedinIn className="text-gray-400 group-hover:text-space-purple transition-colors" size={20} />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  className="w-12 h-12 rounded-xl bg-space-secondary/70 flex items-center justify-center hover:bg-blue-500/10 transition-colors group"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebook className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  className="w-12 h-12 rounded-xl bg-space-secondary/70 flex items-center justify-center hover:bg-pink-500/10 transition-colors group"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <FaInstagram className="text-gray-400 group-hover:text-pink-500 transition-colors" size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="card card-hover"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h3 className="card-title text-2xl mb-8 text-space-purple">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-space-secondary/50 border border-space-secondary/70 rounded-xl px-5 py-3 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-purple/50 focus:border-transparent transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-space-secondary/50 border border-space-secondary/70 rounded-xl px-5 py-3 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-purple/50 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-space-secondary/50 border border-space-secondary/70 rounded-xl px-5 py-3 text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-space-purple/50 focus:border-transparent transition-all resize-none"
                  placeholder="Hello! I'd like to talk about..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="group w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-space-purple to-space-cyan text-white px-6 py-4 rounded-xl font-medium mt-2 hover:shadow-lg hover:shadow-space-purple/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <p>&copy; 2025 Mountassir Jerrari. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
