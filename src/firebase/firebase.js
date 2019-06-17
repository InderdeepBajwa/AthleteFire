
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

export default class Firebase {

    constructor() {
        app.initializeApp(config);

        // Helper function
        this.fieldValue = app.firestore.FieldValue;
        this.emailAuthProvider = app.auth.EmailAuthProvider;

        // Firebase APIs
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Auth API
    
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    // Auth and DB User Listener
    
    onAuthUserListener = (next, fallback) => {
        this.auth.onAuthStateChanged(authUser => {
            if  (authUser) {
                this.user(authUser.uid)
                    .get()
                    .then(snapshot => {
                        const dbUser = snapshot.data()
                        console.log("DB USER IS ", dbUser)

                        // Default role (empty)

                        if (!dbUser.roles) {
                            dbUser.roles = {};
                        }

                        // Merge auth and DB user

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
                fallback();
            }
        });
    }

    // *** User API ***

    user = uid => this.db.doc(`users/${uid}`);

    users = () => this.db.collection(`users`);
}
