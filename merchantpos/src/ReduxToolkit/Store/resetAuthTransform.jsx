import { createTransform } from "redux-persist";

// Create a transform to clear auth state on logout
const resetAuthTransform = createTransform(
  (inboundState, key) => inboundState,
  (outboundState, key) => {
    if (key === "auth" && outboundState.isAuthenticated === false) {
      return undefined; // Clear persisted state
    }
    return outboundState;
  },
  { whitelist: ["auth"] }
);

export default resetAuthTransform;
