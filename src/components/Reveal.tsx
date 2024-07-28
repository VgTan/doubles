import React, {useRef, useEffect} from "react";
import { useAnimation, useInView, useScroll, motion } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    const control = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const isInView = useInView(ref, {once:true});
  

  useEffect(() => {
    if (isInView) {
      control.start("after");
    } else {
      control.start("before");
    }
  }, [isInView, control]);
  
    return (
      <div ref={ref}>
        <motion.div
          variants={{
            before: { opacity: 0, y: 75 },
            after: { opacity: 1, y: 0 },
          }}
          initial="before"
          animate={control}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.div>
      </div>
    );
  };