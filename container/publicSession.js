export const session = new EgContext({ logged: false });

export const logUser = obj => {
  session.setContext({
    logged: true,
    user: obj
  });
};

export const deleteSession = () => {
  session.setContext({
    logged: false
  });
};
