import { betterAuth } from 'better-auth'
import { twoFactorClient } from 'better-auth/client/plugins'
import { twoFactor } from 'better-auth/plugins'
import { createAuthClient } from 'better-auth/svelte'

export const auth = betterAuth({
    appName: 'My App',
    plugins: [twoFactor()],
})

export const authClient = createAuthClient({
    plugins: [twoFactorClient()],
})
