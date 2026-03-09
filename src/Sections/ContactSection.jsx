import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Email",
      icon: Mail,
      href: "mailto:penaortegasamuel@gmail.com",
    },
    {
      title: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/573012345678",
    }
  ];

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-200 pt-12 space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600 text-sm">Let&apos;s connect and discuss opportunities</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.href}
            target={method.title === "WhatsApp" ? "_blank" : "_self"}
            rel={method.title === "WhatsApp" ? "noopener noreferrer" : ""}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="border border-gray-200 rounded p-4 hover:border-gray-300 transition-colors flex items-center gap-3"
          >
            <div className="flex-shrink-0">
              <method.icon className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-900 text-sm">
              {method.title}
            </h3>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactSection;