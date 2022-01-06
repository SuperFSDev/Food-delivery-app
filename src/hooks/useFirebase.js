import initializeAuthentication from "../Firebase/firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signinUsinggoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setLoading(false)
            });
    }
    const signinwithpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).finally(() => { setLoading(false) })
    }
    const registerNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setUserName(name);
                saveUser(email, name, 'POST');
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setError(errorCode);
            });
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(
            result => { }
        )
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        fetch(`https://food-dalivary.herokuapp.com/users-cehck/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error)
        }).finally(() => setLoading(false));
    }
    const saveUser = (email, displauName, method) => {
        const user = { email, displauName };
        fetch('https://food-dalivary.herokuapp.com/users', {
            method: method, // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', user);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return {
        user,
        admin,
        error,
        loading,
        saveUser,
        signinwithpassword,
        registerNewUser,
        logout,
        signinUsinggoogle,
    }
}

export default useFirebase;