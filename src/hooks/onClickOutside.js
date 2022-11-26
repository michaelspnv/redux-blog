import { useEffect } from "react"

function useOnClickOutside(popupRef, btnRef, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !btnRef.current.contains(event.target)
      ) {
        handler()
      }
    }

    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  })
}

export { useOnClickOutside }
