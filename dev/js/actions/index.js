export const selectUser = (user) => {
  console.log("You just clicked on User:", user.first);
  return {
    type: "USER_SELECTED",
    payload: user,
  };
};
