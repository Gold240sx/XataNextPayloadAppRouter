const opacity = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 1
  }
}

const slideUp = {
  initial: {
    y: '100vh'
  },
  enter: {
    y: '100vh'
  },
  exit: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const perspective = {
  initial: {
    y: 0,
    scale: 1
  },
  enter: {
    y: 0,
    scale: 1
  },
  exit: {
    y: -150,
    scale: 0.9,
    opacity: 0.5,
    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

export { opacity, slideUp, perspective }
