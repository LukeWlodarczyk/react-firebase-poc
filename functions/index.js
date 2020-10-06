const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Filter = require('bad-words');
const badWordsFilter = new Filter();

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const storage = admin.storage().bucket();

const MAX_MESSAGES_COUNT = 10;

exports.limiter = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async () => {
    const messagesCount = await db
      .collection('messages')
      .get()
      .then((res) => res.size);

    if (messagesCount > MAX_MESSAGES_COUNT) {
      db.collection('messages')
        .limit(1)
        .orderBy('created', 'asc')
        .get()
        .then((snap) => {
          snap.forEach(async (doc) => {
            const data = doc.data();

            if (data.type === 'img') {
              const regexp = new RegExp('%2F(.*)\\?alt');
              const [, fileName] = data.value.match(regexp);
              console.log(fileName);
              await storage
                .file('images/' + fileName)
                .delete()
                .then(() => console.log('File succesfully removed'));
            }
            await doc.ref.delete();
          });
        });
    }

    return null;
  });

exports.moderator = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap) => {
    const message = snap.data();

    if (message && message.type === 'text') {
      const moderatedMessage = moderateMessage(message.value);

      console.log(
        'Message has been moderated. Saving to DB: ',
        moderatedMessage
      );

      return snap.ref.update({
        value: moderatedMessage,
        moderated: message.text !== moderatedMessage,
      });
    }
    return null;
  });

function moderateMessage(message) {
  if (containsSwearwords(message)) {
    message = moderateSwearwords(message);
  }

  return message;
}

function containsSwearwords(message) {
  return message !== badWordsFilter.clean(message);
}

function moderateSwearwords(message) {
  return badWordsFilter.clean(message);
}
