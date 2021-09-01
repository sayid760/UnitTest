export const api = {
    createItem: (_path, params) =>
      new Promise(resolve => {
        setTimeout(() => {
          resolve(params);
        }, 500);
      })
  };
  