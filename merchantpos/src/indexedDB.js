// Open IndexedDB
const openDB = async () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('my-app-db', 1);
  
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
      };
  
      request.onsuccess = (event) => {
        resolve(event.target.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  
  // Add data to IndexedDB
  export const addUser = async (userData) => {
    const db = await openDB();
    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    store.add(userData);
    return transaction.complete;
  };
  
  // Get all users from IndexedDB
  export const getAllUsers = async () => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('users', 'readonly');
      const store = transaction.objectStore('users');
      const request = store.getAll();
  
      request.onsuccess = () => {
        resolve(request.result);
      };
  
      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };
  
  // Clear all users
  export const clearUsers = async () => {
    const db = await openDB();
    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    store.clear();
    return transaction.complete;
  };
  