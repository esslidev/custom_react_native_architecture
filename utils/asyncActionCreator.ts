const createAction =
  <T>(type: string) =>
  (payload?: T) => {
    console.log(`Action Created: ${type}`, payload); // Log debugging information
    return {
      type,
      payload,
    };
  };

export default createAction;
