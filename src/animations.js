export const pageTransitions = {
  enter: { filter: "blur(40px)", opacity: 0, ease: "easeInOut" },
  exit: {
    filter: "blur(40px)",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  in: {
    filter: "blur(0)",
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
