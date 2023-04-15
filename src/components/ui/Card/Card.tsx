import React from 'react'

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div
      className={`bg-white rounded-md shadow-sm overflow-hidden p-2 .w-full ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
