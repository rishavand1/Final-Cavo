import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white" 
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input 
          type="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white" 
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">Service Interested In</label>
        <select 
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white"
          required
        >
          <option value="" disabled>Select a service</option>
          <option value="ai-automation">AI Automation</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="app-development">AI-Backed Applications</option>
          <option value="cloud">Cloud Services</option>
          <option value="data-science">Data Science & ML</option>
          <option value="custom">Custom Solutions</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea 
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4} 
          className="w-full px-4 py-3 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white" 
          placeholder="Tell us about your project..."
          required
        ></textarea>
      </div>
      
      <div>
        <motion.button 
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium disabled:opacity-70"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </div>
    </form>
  );
}
