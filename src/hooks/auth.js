import { useSelector } from "react-redux"

function useAuth() {
  const userInfo = useSelector((state) => state.user.info)

  const isAuth = userInfo.token

  return isAuth
}

export { useAuth }
