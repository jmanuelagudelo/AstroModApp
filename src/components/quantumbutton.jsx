import { useNavigate } from "react-router-dom"

export default function QuantumButton() {
  const navigate = useNavigate()

  return (
    <motion.div
      onClick={() => navigate("/mecanica-cuantica")}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="
        relative cursor-pointer
        bg-black text-white
        rounded-2xl overflow-hidden
        h-44
        select-none
      "
    >
      {/* Glitch slices */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: [0, 1, 0],
              x: [0, -8, 8, 0],
            },
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          className="absolute inset-0 bg-white/5"
          style={{
            clipPath: `inset(${i * 25}% 0 ${(2 - i) * 25}% 0)`,
          }}
        />
      ))}

      {/* RGB Text layers */}
      <motion.h2
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
        style={{ color: "#00ffff", mixBlendMode: "screen" }}
        animate={{ x: [-2, 2, -2] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
      >
        Mecánica Cuántica
      </motion.h2>

      <motion.h2
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
        style={{ color: "#ff00ff", mixBlendMode: "screen" }}
        animate={{ x: [2, -2, 2] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 2 }}
      >
        Mecánica Cuántica
      </motion.h2>

      {/* Main Text */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-2xl font-bold tracking-wide">
          Mecánica Cuántica
        </h2>
        <p className="text-sm text-gray-400">
          Superposición, incertidumbre y caos
        </p>
      </div>
    </motion.div>
  )
}
