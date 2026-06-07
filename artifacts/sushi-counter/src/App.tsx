import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);

  function increment() {
    setCount((c) => c + 1);
    setKey((k) => k + 1);
  }

  function reset() {
    setCount(0);
    setKey((k) => k + 1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center gap-8 max-w-sm w-full border border-rose-100">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-rose-700 tracking-tight">Sushi Sayacı</h1>
          <p className="text-sm text-rose-400 mt-1 font-medium">Ne kadar yiyebilirsin?</p>
        </div>

        {/* Sushi Image */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-200 shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg"
              alt="Sushi tabağı"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
            🍣
          </div>
        </div>

        {/* Counter Display */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Sayı</p>
          <div className="relative h-24 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={key}
                initial={{ y: -40, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="text-8xl font-black text-rose-600 tabular-nums select-none"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.03, type: "spring", stiffness: 500 }}
                className="text-base"
              >
                🍣
              </motion.span>
            ))}
            {count > 10 && (
              <span className="text-xs text-rose-400 font-bold self-center ml-1">+{count - 10}</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={increment}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-rose-200 transition-colors active:shadow-none"
          >
            ➕ Arttır
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={reset}
            className="w-full bg-white hover:bg-rose-50 text-rose-500 font-bold py-3 rounded-2xl text-base border-2 border-rose-200 transition-colors"
          >
            🔄 Sıfırla
          </motion.button>
        </div>

        {count >= 20 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-amber-600 font-medium bg-amber-50 rounded-xl px-4 py-2 border border-amber-200"
          >
            Vay canına! {count} parça sushi — gerçek bir uzman! 🏆
          </motion.p>
        )}
      </div>
    </div>
  );
}
