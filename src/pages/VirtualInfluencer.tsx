import React from "react";
import { motion } from "framer-motion";

const VirtualInfluencerSection: React.FC = () => {
  return (
    <motion.section
      className="bg-gradient-to-b from-blue-50 to-white mt-20 py-2 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Meet Your Virtual Influencer
          </h2>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            AI-generated creators built for your brand. Engage audiences,
            scale campaigns, and collaborate without limits.
          </p>
          {/* Email CTA */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gray-700 font-medium">
              partnerships@katr.ai
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/virtual-influencer.png"
            alt="Virtual Influencer"
            className="w-full max-w-md rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VirtualInfluencerSection;
