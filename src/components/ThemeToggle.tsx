import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-xl bg-charcoal/5 dark:bg-white/10 hover:bg-charcoal/10 dark:hover:bg-white/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <motion.div
          animate={{
            y: theme === "light" ? 0 : -30,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-charcoal"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: theme === "dark" ? 0 : 30,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-white"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
    </button>
  );
};
