'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Spin() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(25);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (timeLeft > 0 && isSpinning) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsSpinning(false);
    }
  }, [timeLeft, isSpinning]);

  const values = ["2.10 ▼", "2.00 ▼", "2.10 ▼", "2.00 ▼"];

  return (
    <div className="min-h-screen bg-tg-bg p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-tg-gray text-sm">Giggle</span>
          <span className="text-tg-gray text-xs">yesterday at 21:08</span>
        </div>
        <div className="text-sm text-tg-gray">1 of 1</div>
      </div>

      <div className="text-center space-y-3 mb-12">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`text-xl font-semibold ${
              index === 2 ? 'text-tg-gold' : 'text-white'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {value}
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-8">
        <div className="text-sm text-tg-gray mb-3">
          {isSpinning ? 'Tap to skip' : 'Ready to collect!'}
        </div>
        <div className="text-2xl font-mono font-bold">
          {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
          {String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="text-center">
        {isSpinning ? (
          <motion.button
            onClick={() => setIsSpinning(false)}
            className="bg-tg-light-bg text-white py-4 px-12 rounded-xl border border-tg-gray/30"
            whileTap={{ scale: 0.95 }}
          >
            Skip
          </motion.button>
        ) : (
          <motion.button
            onClick={() => router.push('/home/result')}
            className="bg-gold-gradient text-black font-bold py-4 px-12 rounded-xl text-lg"
            whileTap={{ scale: 0.95 }}
          >
            Collect
          </motion.button>
        )}
      </div>
    </div>
  );
}
