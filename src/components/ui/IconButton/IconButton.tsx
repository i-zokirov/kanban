import React from 'react'
import { IconType } from 'react-icons'

type IconButtonProps = {
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className = '',
  children
}) => {
  const classes = `bg-transparent text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 ${className} flex items-center justify-center transition-colors duration-200 ease-in-out h-8 w-8 rounded-full hover:bg-gray-200`

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default IconButton
