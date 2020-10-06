import firebase from './firebase';

const storage = firebase.storage();

export const uploadImage = async (image) => {
  const name = image.name + Date.now();
  const ref = storage.ref(`images/${name}`);

  await ref.put(image);

  const url = await ref.getDownloadURL().then((url) => url);

  return url;
};
