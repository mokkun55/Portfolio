import { motion } from "framer-motion";
import React from "react";

function Test() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
}

export default Test;
