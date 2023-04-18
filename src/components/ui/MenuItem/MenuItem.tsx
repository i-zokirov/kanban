import React from 'react'
interface MeuItemProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}
const MenuItem: React.FC<MeuItemProps> = ({
  children,
  className,
  style,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left flex items-center ${className}`}
      style={{ ...style }}
    >
      {children}
    </button>
  )
}

export default MenuItem
