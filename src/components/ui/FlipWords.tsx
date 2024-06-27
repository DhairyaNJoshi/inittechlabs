"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useCallback, useEffect, useState } from "react";

const FlipWords = ({
  words,
  duration = 3000,
  className,
  isVisible = true,
}: {
  words: string[];
  duration?: number;
  className?: string;
  isVisible?: boolean;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div className={className}>
      {isVisible && (
        <AnimatePresence
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            exit={{
              opacity: 0,
              y: -40,
              x: 40,
              filter: "blur(8px)",
              scale: 2,
              position: "absolute",
            }}
            className={cn(
              "z-10 inline-block relative text-left text-neutral-900 px-2",
              className
            )}
            key={currentWord}
          >
            {currentWord.split(" ").map((word, wordIndex, array) => (
              <Fragment key={wordIndex}>
                {word.split("").map((letter, index) => (
                  <motion.span
                    key={word + index}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="inline-block text-gray"
                  >
                    {letter}
                  </motion.span>
                ))}
                {array[1] !== "&" && wordIndex === 1 ? (
                  <br />
                ) : (
                  array.length - 1 !== wordIndex && <>&nbsp;</>
                )}
                {array[1] === "&" && wordIndex === 2 ? (
                  <br />
                ) : (
                  array.length - 1 !== wordIndex && <></>
                )}
              </Fragment>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default FlipWords;
