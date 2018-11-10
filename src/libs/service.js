import Network from "./network";

const networkError = {
  message: 'Network',
  code: 'network-error',
}

export const GET = url => new Promise(async (resolve, reject) => {
  try {
    const isConnected = await Network.isConnected();
    
    if (!isConnected) {
      reject(networkError);
      return;
    }

    const res = await fetch(url);
    const resJson = await res.json();
    resolve(resJson);
  } catch (err) {
    reject(err);
  }
});
