import firebase from './firebase';
import * as storage from './storage';

const db = firebase.firestore();

export const createUser = async ({ id, email, isVerified }) =>
  db.collection('users').doc(id).set({
    id,
    email,
    isVerified,
  });

export const createUserIfNotExist = async ({ id, email, isVerified }) =>
  db
    .collection('users')
    .doc(id)
    .get()
    .then(async (doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        const user = await createUser({ id, email, isVerified });
        return user;
      }
    });

export const createMessage = async ({ text, file, authorId }) => {
  if (file) {
    const url = await storage.uploadImage(file);

    db.collection('messages').add({
      value: url,
      type: 'img',
      authorId,
      created: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  }

  if (text) {
    db.collection('messages').add({
      value: text,
      type: 'text',
      authorId,
      created: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  }
};

export const getAllMessages = async () =>
  db
    .collection('messages')
    .get()
    .then(async (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => messages.push(doc.data()));

      messages = await Promise.all(
        messages.map(async (m) => ({
          value: m.value,
          author: await db
            .collection('users')
            .doc(m.authorId)
            .get()
            .then((doc) => doc.data()),
        }))
      );

      return messages;
    });

export const listenForMessages = async (fn) =>
  db
    .collection('messages')
    .orderBy('created', 'desc')
    .limit(10)
    .onSnapshot(async (snapshot) => {
      let newMessages = [];
      snapshot.docChanges().forEach(function (change) {
        if (change.type === 'added' || change.type === 'modified') {
          newMessages.push({ id: change.doc.id, ...change.doc.data() });
        }
      });

      const newMessagesPopulated = await Promise.all(
        newMessages.map(async (m) => ({
          id: m.id,
          value: m.value,
          type: m.type,
          created: m.created,
          author: await db
            .collection('users')
            .doc(m.authorId)
            .get()
            .then((doc) => doc.data()),
        }))
      );

      return fn(newMessagesPopulated);
    });
