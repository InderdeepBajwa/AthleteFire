
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Firebase configuration (secret)
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseUrl: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
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

