export interface UserProfile {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
}

export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
}
