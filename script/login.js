const firebaseConfig = {
    apiKey: "AIzaSyDqqa2lfDRdwLCGOyyihP2VXO8bTVvCES4",
    authDomain: "cms-software-0000.firebaseapp.com",
    projectId: "cms-software-0000",
    storageBucket: "cms-software-0000.appspot.com",
    messagingSenderId: "556461428890",
    appId: "1:556461428890:web:f048d51582256a3a540f23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

// Add login event
// When the user logs in...
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get email and password
    const email = loginEmail.value;
    const password = loginPassword.value;
    const auth = firebase.auth();

    // Sign in
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Store the email in session storage
            sessionStorage.setItem('email', email);
            window.location.href = '/page/home.html'; // Redirect to welcome page
        })
        .catch((error) => {
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password!');
            } else if (error.code === 'auth/user-not-found') {
                alert('User Not registered..! Please Register');
                window.location.href = 'register.html';
            } else {
                alert('Invalid Credentials..!');
                console.log(error.message);
            }
        });
});
