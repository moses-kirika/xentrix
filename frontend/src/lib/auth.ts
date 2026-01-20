'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Check if the user is authenticated by checking for the auth cookie
 */
export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;

    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth='));

    return authCookie?.includes('auth=true') || false;
}

/**
 * Logout the user by clearing the auth cookie and redirecting to login
 */
export function logout(): void {
    // Clear the auth cookie
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    // Redirect to login page
    window.location.href = '/admin/login';
}

/**
 * Hook to require authentication for a page
 * Redirects to login if not authenticated
 */
export function useRequireAuth() {
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const authed = isAuthenticated();

            if (!authed) {
                router.push('/admin/login');
            } else {
                setAuthenticated(true);
            }

            setIsChecking(false);
        };

        checkAuth();
    }, [router]);

    return { isChecking, authenticated };
}
