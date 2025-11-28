'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Result() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-tg-bg p-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
          # Share
        </h1>
        <div className="text-5xl font-bold text-tg-gold">167</div>
      </div>

      <motion.div 
        className="bg-tg-light-bg rounded-2xl p-6 border border-tg-gold/30 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-6">
          <div className="text-tg-gold font-bold text-lg mb-1">Rare</div>
          <div className="text-3xl font-bold mb-1">2.10</div>
          <div className="text-tg-gray text-sm">Floor Price</div>
        </div>

        <div className="border-t border-tg-gray/30 pt-5">
          <div className="text-center font-bold text-xl mb-2">Swag Bag</div>
          <div className="text-center text-tg-gray text-sm mb-6">Collectible #13338</div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-tg-gray/10">
              <span className="text-tg-gray">Model</span>
              <span className="font-medium">Money Bag</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-tg-gray/10">
              <span className="text-tg-gray">Backdrop</span>
              <span className="font-medium">Azure Blue</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-tg-gray">Symbol</span>
              <span className="font-medium">Wasp</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex gap-3">
        <motion.button 
          className="flex-1 bg-tg-light-bg text-white py-4 rounded-xl font-bold border border-tg-gray/30"
          whileTap={{ scale: 0.95 }}
        >
          Sell 1.7
        </motion.button>
        <motion.button 
          onClick={() => router.push('/collection')}
          className="flex-1 bg-gold-gradient text-black py-4 rounded-xl font-bold"
          whileTap={{ scale: 0.95 }}
        >
          Collect
        </motion.button>
      </div>
    </div>
  );
}
