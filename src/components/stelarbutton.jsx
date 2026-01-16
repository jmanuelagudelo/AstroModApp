import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

function generateStars(count = 50) {
  const colors = ["bg-white", "bg-blue-400", "bg-red-400"];

  return Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 0.1  + 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random(),
    duration: Math.random() * 2 + 2,
  }));
}

export default function StelarButton() {
  const navigate = useNavigate();

  // ⭐ Stars generated ONCE
  const stars = useMemo(() => generateStars(50), []);

  return (
    <motion.div
      onClick={() => navigate("/astrofisica-estelar")}
      className="
        relative cursor-pointer
        bg-black text-white
        rounded-2xl overflow-hidden
        h-44
      "
    >
      {stars.map((star, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${star.color}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size * 4,
            height: star.size * 4,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-2xl font-bold">
          Astrofísica Estelar
        </h2>
        <p className="text-sm text-gray-300">
          Estrellas, evolución y estructura
        </p>
      </div>
    </motion.div>
  );
}
