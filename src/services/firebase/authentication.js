import firebase from './firebase';

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export const signInWith = (provider) => async () =>
  auth.signInWithPopup(provider).then((data) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const token = data.credential.accessToken;
    const user = {
      id: data.user.uid,
      email: data.user.email,
      isVerified: data.user.emailVerified,
    };

    return user;
  });

export const signInWithGoogle = signInWith(googleProvider);
export const signInWithGithub = signInWith(githubProvider);

export const signOut = async () => auth.signOut();

export const signUpWithEmailAndPassowrd = async ({ email, password }) =>
  auth.createUserWithEmailAndPassword(email, password).then((data) => ({
    id: data.user.uid,
    email: data.user.email,
    isVerified: data.user.emailVerified,
  }));

export const signInWithEmailAndPassowrd = async ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password).then((data) => ({
    id: data.user.uid,
    email: data.user.email,
    isVerified: data.user.emailVerified,
  }));

export const verifyAuth = async (fn) => firebase.auth().onAuthStateChanged(fn);
