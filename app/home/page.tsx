'use client';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  const items = [
    { name: "Hidden", prize: "Win Flying Broom" },
    { name: "Oreo", prize: "Win Low Rid" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d1a1a] p-5">
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-3">
            # Chance
          </h1>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-tg-gold mb-1">170</span>
            <span className="text-sm text-tg-gray uppercase tracking-widest">Wins</span>
          </div>
        </div>

        <div className="space-y-4 max-w-sm mx-auto mb-12">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-tg-light-bg rounded-2xl p-5 border border-tg-gold/30 backdrop-blur-sm cursor-pointer"
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/home/spin')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl text-white">{item.name}</span>
                <span className="text-tg-gold text-xs bg-tg-gold/20 px-3 py-1.5 rounded-full font-medium">
                  {item.prize}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            className="bg-gold-gradient text-black font-bold py-5 px-16 rounded-2xl text-lg shadow-lg shadow-orange-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/home/spin')}
          >
            Open for 3
          </motion.button>
        </div>
      </div>
    </Layout>
  );
}
