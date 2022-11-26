import React, { useContext, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../store/slices/userSlice"
import { PopupContext } from "../../hoc/PopupProvider"
import { useOnClickOutside } from "../../hooks/onClickOutside"
import { Button } from "../Button"
import { MenuButton } from "../MenuButton"
import { Popup } from "../Popup"
import styles from "./User-avatar.module.css"

function UserAvatar() {
  const { toggleMenu } = useContext(PopupContext)

  const dispatch = useDispatch()

  const currentUserEmail = useSelector((state) => state.user.info.email)

  const getUserAvatar = () => {
    // Logic of getting custom user avatar
    if (false) {
      return customImage
    }
    return currentUserEmail[0].toUpperCase()
  }

  const signOut = () => {
    dispatch(removeUser())
  }

  const popupRef = useRef()

  const btnRef = useRef()

  useOnClickOutside(popupRef, btnRef, () => {
    toggleMenu()
  })

  return (
    <React.Fragment>
      <MenuButton btnRef={btnRef} className={styles.avatar}>
        {getUserAvatar()}
      </MenuButton>
      <Popup popupRef={popupRef} className={styles.avatarPopup}>
        <Button to="/" onClick={signOut}>
          Sign Out
        </Button>
      </Popup>
    </React.Fragment>
  )
}

export { UserAvatar }
