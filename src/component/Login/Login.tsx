import React, { useState, useEffect } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  signOut,
  User,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.init";

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async (): Promise<void> => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleGithubSignIn = async (): Promise<void> => {
    try {
      const githubProvider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  const handleSignOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {user ? (
          <div className="text-center">
            <div className="mb-6">
              <img
                src={user.photoURL || ""}
                alt={user.displayName || "User"}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800">
                {user.displayName}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h2>

            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>

            <button
              onClick={handleGithubSignIn}
              className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
