type payload = boolean

export function reduxAction (type: string, payload: payload) {
  return { type, payload };
};
