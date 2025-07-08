
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({ 
  texts = [], 
  rotationInterval = 3000,
  mainClassName = "",
  staggerFrom = "first",
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 }
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 200);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  const getStaggerDelay = (index, totalChars) => {
    if (staggerFrom === "last") {
      return (totalChars - index - 1) * staggerDuration;
    }
    return index * staggerDuration;
  };

  if (!texts || texts.length === 0) return null;

  const currentText = texts[currentIndex] || "";
  const characters = currentText.split('');

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {characters.map((char, index) => (
              <motion.span
                key={`${currentIndex}-${index}`}
                className={splitLevelClassName}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -120 }}
                transition={{
                  ...transition,
                  delay: getStaggerDelay(index, characters.length)
                }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
