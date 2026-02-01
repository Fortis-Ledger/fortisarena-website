import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';

const toastStyles = {
  success: {
    icon: 'CheckCircle',
    bg: 'bg-success/10 border-success/30',
    text: 'text-success',
  },
  error: {
    icon: 'XCircle',
    bg: 'bg-red-500/10 border-red-500/30',
    text: 'text-red-400',
  },
  info: {
    icon: 'Info',
    bg: 'bg-blue-500/10 border-blue-500/30',
    text: 'text-blue-400',
  },
};

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 4000 }) => {
  const style = toastStyles[type] || toastStyles.info;

  useEffect(() => {
    if (isVisible && duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -40, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -40, x: '-50%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-6 left-1/2 z-[99999] flex items-center gap-3 px-5 py-3 rounded-xl border backdrop-blur-md ${style.bg}`}
        >
          <Icon name={style.icon} size={20} className={style.text} />
          <span className="text-sm font-medium text-white">{message}</span>
          <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white transition-colors">
            <Icon name="X" size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
