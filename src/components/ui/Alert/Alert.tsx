import React from 'react'

interface IAlertProps {
  type: 'info' | 'danger' | 'success' | 'warning' | 'dark'
  message: string
}

const Alert: React.FC<IAlertProps> = ({ type, message }) => {
  let backgroundColor, textColor
  switch (type) {
    case 'info':
      backgroundColor = 'bg-blue-50'
      textColor = 'text-blue-800'
      break
    case 'danger':
      backgroundColor = 'bg-red-50'
      textColor = 'text-red-800'
      break
    case 'success':
      backgroundColor = 'bg-green-50'
      textColor = 'text-green-800'
      break
    case 'warning':
      backgroundColor = 'bg-yellow-50'
      textColor = 'text-yellow-800'
      break
    case 'dark':
      backgroundColor = 'bg-gray-800'
      textColor = 'text-gray-300'
      break
    default:
      backgroundColor = 'bg-blue-50'
      textColor = 'text-blue-800'
  }

  return (
    <div
      className={`p-4 mb-4 text-sm w-full rounded-lg ${backgroundColor} ${textColor}`}
      role="alert"
    >
      <span className="font-medium">{message}</span>
    </div>
  )
}

export default Alert
