import { useEffect, useState } from 'react'

const useSharedLogic = (width: number) => {

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < width)
      }
  
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
  
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
  
  
  return {isMobile, setIsMobile}
}

export default useSharedLogic