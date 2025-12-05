"use client";

import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Collection() {
  const collectionItems = [
    { name: "Activity", value: "2.10 💬" },
    { name: "Collection", value: "2.10 💮" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-tg-bg p-5">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
            # Chance
          </h1>
          <h2 className="text-xl font-semibold text-white mb-1">Happy soul</h2>
          <div className="text-tg-gold text-lg">Connect 😊</div>
        </div>

        <div className="space-y-4 max-w-sm mx-auto mb-8">
          {collectionItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-tg-light-bg rounded-2xl p-5 border border-tg-gold/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg">{item.name}</span>
                <span className="text-tg-gold text-lg font-semibold">{item.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-tg-light-bg rounded-2xl p-5 border border-tg-gold/30 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">Sell all</span>
            <span className="text-tg-gold text-lg font-semibold">3.4 💮</span>
          </div>
          <motion.button 
            className="w-full bg-gold-gradient text-black font-bold py-4 rounded-xl text-lg"
            whileTap={{ scale: 0.95 }}
          >
            Withdraw
          </motion.button>
        </motion.div>
      </div>
    </Layout>
  );
}
