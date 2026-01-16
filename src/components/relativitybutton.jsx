import { motion } from "motion/react";
import Lottie from "lottie-react";
import Rocket from "../assets/rocketv2.json";

export default function RelativityButton() {

  return (
    <motion.div
      className="
        relative cursor-pointer
        bg-black text-white
        rounded-2xl overflow-hidden
        h-44
      "
    >
    <motion.div
    animate={{
        scaleX: [1, 1.5, 1],
        scaleY: [1, 1.15, 1],
    }}
    transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
    }}
    className="absolute inset-0 z-0"
    style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
        transformOrigin: "center",
    }}
    >
        <motion.div
            className="
                relative h-full

                sm:flex
                sm:justify-around
                sm:items-center
                sm:gap-12
            "
        >
        <Lottie
            animationData={Rocket}
            loop
            className="
                absolute top-2 right-2
                w-12 h-12 opacity-80

                sm:static
                sm:w-24 sm:h-24
            "

        />

        <Lottie
            animationData={Rocket}
            loop
            className="
                absolute bottom-2 left-2
                w-12 h-12 opacity-80

                sm:static
                sm:w-24 sm:h-24
            "
        />
        </motion.div>


    </motion.div>


      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Relatividad Especial
        </h2>
        <p className="text-sm text-gray-300">
          Introducción a la relatividad especial
        </p>
      </div>

    </motion.div>
  );
}
