import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(formData);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-20 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-white/50"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <div className="h-0.5 w-0 group-focus-within:w-full bg-blue-500 transition-all duration-300" />
            </div>
            
            <div className="group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-white/50"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div className="h-0.5 w-0 group-focus-within:w-full bg-blue-500 transition-all duration-300" />
            </div>
          </div>
          
          <div className="group">
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-white/50"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <div className="h-0.5 w-0 group-focus-within:w-full bg-blue-500 transition-all duration-300" />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <MagneticButton asChild>
                <div className="flex items-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </div>
              </MagneticButton>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}