const storage = window.localStorage;

function set(key: string, value: any): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      storage && storage.setItem(key, JSON.stringify(value));
      resolve();
    } catch (err) {
      reject(`Não foi possivel salvar ao storage ${err}`);
    }
  });
}

function remove(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      storage && storage.removeItem(key);
      resolve();
    } catch (err) {
      reject(`Não foi possivel remove-lo ao storage ${err}`);
    }
  });
}

function get(key: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      if (storage) {
        const item = storage.getItem(key);
        resolve(JSON.parse(item));
      }
      resolve(undefined);
    } catch (err) {
      reject(`Não foi possivel obter ao storage: ${err}`);
    }
  });
}

export default { get, remove, set };
