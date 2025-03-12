import { useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
const useIsScrollDown = () => {
  const { scrollY } = useScroll()
  const [isScrollDown, setIsScrollDown] = useState(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    prevScrollY.current = scrollY.get()
  }, [scrollY])

  useMotionValueEvent(scrollY, 'change', latest => {
    if (prevScrollY.current < latest) {
      setIsScrollDown(true)
    } else {
      setIsScrollDown(false)
    }
    prevScrollY.current = latest
  })

  return isScrollDown
}

export default useIsScrollDown
