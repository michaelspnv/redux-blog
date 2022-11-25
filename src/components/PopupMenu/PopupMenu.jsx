import React, { useContext, useRef } from "react"
import { PopupContext } from "../../hoc/PopupProvider"
import { useOnClickOutside } from "../../hooks/onClickOutside"
import { MenuButton } from "../MenuButton"
import { Popup } from "../Popup"

function PopupMenu({ popupClass, buttonClass, children }) {
  const { toggleMenu } = useContext(PopupContext)

  const popup = useRef()

  const button = useRef()

  useOnClickOutside(popup, button, () => {
    toggleMenu()
  })

  return (
    <div>
      <MenuButton buttonRef={button} className={buttonClass}>
        {children[0]}
      </MenuButton>
      <Popup popupRef={popup} className={popupClass}>
        {children[1]}
      </Popup>
    </div>
  )
}

export { PopupMenu }
