

import { apiClient } from '../lib/api'

export const AuthService = {
    signup: (email: string, password: string, username: string) =>
        apiClient('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password, username }),
        }),

    login: (email: string, password: string) =>
        apiClient('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        }),

    logout: () =>
        apiClient('/api/logout', { method: 'POST' }),

    currentUser: () =>
        apiClient('/api/currentUser', { method: 'GET' }),
}