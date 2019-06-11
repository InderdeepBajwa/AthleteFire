
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Firebase configuration (secret)
const config = {
    apiKey: "AIzaSyAsBEyifElIz53n6J_SgwuW4jzc6IBtwLQ",
    authDomain: "blueathlete-d1904.firebaseapp.com",
    databaseURL: "https://blueathlete-d1904.firebaseio.com",
    projectId: "blueathlete-d1904",
    storageBucket: "blueathlete-d1904.appspot.com",
    messagingSenderId: "802929808431",
    appId: "1:802929808431:web:bd2d81520dfd2e94"
  };

// Firebase class and methods
class Firebase {
    
    constructor() {
        app.initializeApp(config);

        this.serverValue = app.database.serverValue;
        this.emailAuthProvider = app.auth.emailAuthProvider;

        // Firebase API
        this.auth = app.auth();
        this.db = app.database();
    }

    // Authentication API

    // TODO: Sign Up, send email verification
    
    // Sign In
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Sign out
    doSignOut = () => this.auth.signOut();

    // TODO: Password Reset

    // Auth and Database listener

    onAuthUserListener = (next, fall) => {
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once('value')
                    .then(snapshot => {
                        const dbUser = snapshot.val();

                        // If no roles set
                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }

                        // merge auth with db
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        };
                        
                        next(authUser);
                    });
            } else {
                fall();
            }
        });
    }

    // User API
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;

