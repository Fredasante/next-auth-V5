/**
 * Represents an array of public routes.
 * @type {string[]}
 */
export const PublicRoutes: string[] = ["/", "/auth/register"];

/**
 * Defines the authentication routes. These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "auth/register"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are considered to be authentication routes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default login redirect.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
