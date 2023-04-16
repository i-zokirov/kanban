import React from 'react'
import { IconType } from 'react-icons'

type IconButtonProps = {
  onClick?: () => void
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  children,
  style
}) => {
  const classes = `bg-transparent text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900  flex items-center justify-center transition-colors duration-200 ease-in-out h-8 w-8 rounded-full hover:bg-gray-200 ${className}`

  return (
    <button type="button" style={style} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default IconButton
