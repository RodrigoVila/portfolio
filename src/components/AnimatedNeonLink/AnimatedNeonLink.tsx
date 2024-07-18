import { motion } from "framer-motion";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";

type AnimatedNeonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
};

export const AnimatedNeonLink: FC<AnimatedNeonLinkProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      className="relative w-max cursor-pointer p-2 text-white"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 transform border-4 border-transparent"
        style={{
          borderImage: "linear-gradient(90deg, #ff00ff, #00ffff) 1",
        }}
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        variants={{
          hover: {
            clipPath: [
              "polygon(0 0, 0 0, 0 100%, 0 100%)",
              "polygon(0 0, 100% 0, 0 100%, 0 100%)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              "polygon(0 0, 100% 0, 100% 100%, 0 0)",
            ],
            transition: { duration: 1, ease: "easeInOut" },
          },
        }}
      />
      <div className="relative transform">
        <a className="text-center" {...rest}>
          {children}
        </a>
      </div>
    </motion.div>
  );
};
