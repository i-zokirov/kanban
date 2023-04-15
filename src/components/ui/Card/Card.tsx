import React from 'react'
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <div
      className={`bg-white rounded-md shadow-sm overflow-hidden p-2 .w-full ${className}`}
      style={{ ...style }}
    >
      {children}
    </div>
  )
}

export default Card
