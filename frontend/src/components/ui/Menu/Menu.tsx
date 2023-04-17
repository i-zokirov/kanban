import React, { useRef, useEffect } from 'react'
interface MenuProps {
  anchorElement: React.ReactNode
  className?: string
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}
const Menu: React.FC<MenuProps> = ({
  anchorElement,
  className = '',
  children,
  isOpen,
  setIsOpen
}) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className={`relative inline-block ${className}`} ref={menuRef}>
      {anchorElement}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  )
}

export default Menu
