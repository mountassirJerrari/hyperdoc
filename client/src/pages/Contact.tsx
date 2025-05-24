import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-space-secondary p-6 rounded-lg shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h3 className="text-xl font-orbitron mb-6 text-space-accent">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-space-accent bg-opacity-20 flex items-center justify-center mr-4">
                  <Mail className="text-space-accent" size={18} />
                </div>
                <a 
                  href="mailto:mountassir.jerrari@gmail.com" 
                  className="text-gray-300 hover:text-space-accent transition-colors"
                >
                  mountassir.jerrari@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-space-accent bg-opacity-20 flex items-center justify-center mr-4">
                  <MapPin className="text-space-accent" size={18} />
                </div>
                <span className="text-gray-300">Mohammedia, Morocco</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-orbitron mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com" 
                  className="w-10 h-10 rounded-full bg-space-accent bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-space-accent" size={18} />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  className="w-10 h-10 rounded-full bg-space-purple bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-space-purple" size={18} />
                </motion.a>
                <motion.a 
                  href="https://discord.com" 
                  className="w-10 h-10 rounded-full bg-space-cyan bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="text-space-cyan" size={18} />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  className="w-10 h-10 rounded-full bg-space-mint bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                  whileHover={{ y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-space-mint" size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-space-secondary p-6 rounded-lg shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h3 className="text-xl font-orbitron mb-6 text-space-accent">Send Message</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-space-accent focus:outline-none transition-colors" 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-space-accent focus:outline-none transition-colors" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-white focus:border-space-accent focus:outline-none transition-colors" 
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="bg-space-accent hover:bg-opacity-80 text-white font-orbitron py-2 px-6 rounded-md transition-colors inline-flex items-center"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Send Message</span>
                <ArrowRight className="ml-2" size={18} />
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
          <p>&copy; 2023 John Doe. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
