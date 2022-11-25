import React, { useState, createContext } from "react"

const PopupContext = createContext()

function PopupProvider({ children }) {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <PopupContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </PopupContext.Provider>
  )
}

export { PopupContext, PopupProvider }
