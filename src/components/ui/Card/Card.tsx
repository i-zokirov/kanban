import React from 'react'
interface CardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  innerRef?: React.Ref<HTMLDivElement>
  [x: string]: any
}
const Card: React.FC<CardProps> = ({
  children,
  className,
  style,
  innerRef,
  ...rest
}) => {
  return (
    <div
      ref={innerRef}
      className={`bg-white rounded-md shadow-sm p-2 ${className}`}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Card
