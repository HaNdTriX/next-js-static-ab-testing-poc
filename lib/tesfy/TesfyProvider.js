import { useMemo, useState } from "react";
import TesfyContext from "./TesfyContext";
import TesfyCriticalStyles from "./TesfyCriticalStyles";

export default function TesfyProvider({ engine, children }) {
  const [userId, setUserId] = useState(engine.getUserId());
  const [attributes, setAttributes] = useState(engine.getAttributes());

  const value = useMemo(() => {
    const handleUserIdChange = (userId) => {
      engine.setUserId(userId);
      setUserId(userId);
    };

    const handleAttributesChange = (attributes) => {
      engine.setAttributes(attributes);
      setAttributes(attributes);
    };

    return {
      engine,
      userId,
      attributes,
      setUserId: handleUserIdChange,
      setAttributes: handleAttributesChange,
    };
  }, [engine, userId, attributes]);

  return (
    <TesfyContext.Provider value={value}>
      <TesfyCriticalStyles />
      {children}
    </TesfyContext.Provider>
  );
}
