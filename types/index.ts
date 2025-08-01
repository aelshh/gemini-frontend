export interface User {
  id: string;
  phone: string;
  countryCode: string;
  name?: string;
}

export interface Country {
  name: string;
  code: string;
  dialCode: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
