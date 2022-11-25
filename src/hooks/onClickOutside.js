import { useEffect } from "react"

function useOnClickOutside(ref, btn, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !btn.current.contains(event.target)
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
