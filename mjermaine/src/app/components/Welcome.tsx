// components/Welcome.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases: string[] = [
  "Hello, Welcome!",
  "¡Hola bienvenido!",
  "你好，欢迎!",
  "नमस्ते, स्वागत है!",
  "مرحبا، أهلا وسهلا!",
  "হ্যালো, স্বাগতম!",
  "Olá, bem-vindo!",
  "Здравствуйте, добро пожаловать!"
];

const Welcome = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setVisible(true);
      }, 500); // 500ms delay before displaying the next phrase
    }, 3500); // 3000ms display time + 500ms delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {visible && (
          <motion.div
            key={phrases[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[index]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
