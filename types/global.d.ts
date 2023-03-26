declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CODESPHERE_BACKEND: string;
      NEXT_PUBLIC_CODESPHERE_TEAM_ID: string;
    }
  }
}

export {};
