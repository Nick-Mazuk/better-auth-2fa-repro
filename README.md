# better-auth-2fa-repro

```sh
npm i
npm run typecheck
```

Output:

```text
index.ts:8:15 - error TS2375: Type '{ id: "two-factor"; endpoints: { enableTwoFactor: { <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: { body: { password: string; issuer?: string | undefined; }; } & { method?: "POST" | undefined; } & { query?: Record<...> | undefined; } & ... 4 more ... & { ...; }): Promise<......' is not assignable to type 'BetterAuthPlugin' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties.
  Types of property 'options' are incompatible.
    Type 'TwoFactorOptions | undefined' is not assignable to type 'Record<string, any>'.
      Type 'undefined' is not assignable to type 'Record<string, any>'.

8     plugins: [twoFactor()],
                ~~~~~~~~~~~

index.ts:12:15 - error TS2322: Type '{ id: "two-factor"; $InferServerPlugin: { id: "two-factor"; endpoints: { enableTwoFactor: { <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: { body: { password: string; issuer?: string | undefined; }; } & { method?: "POST" | undefined; } & ... 5 more ... & { ...; }): Promise<.....' is not assignable to type 'BetterAuthClientPlugin'.
  The types of '$InferServerPlugin.options' are incompatible between these types.
    Type 'TwoFactorOptions | undefined' is not assignable to type 'Record<string, any>'.
      Type 'undefined' is not assignable to type 'Record<string, any>'.

12     plugins: [twoFactorClient()],
                 ~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:
```
