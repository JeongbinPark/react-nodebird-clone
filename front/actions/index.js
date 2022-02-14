export const login = (data) => {
  return {
    type: "LOGIN",
    data,
  }
}
export const logout = () => {
  return {
    type: "LOGOUT"
  }
}

export const addPost = () => {
  return {
    type: "ADD_POST"
  }
}