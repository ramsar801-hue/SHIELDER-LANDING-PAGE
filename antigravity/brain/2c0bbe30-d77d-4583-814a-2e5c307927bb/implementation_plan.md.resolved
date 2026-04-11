# Supabase Integration Plan

Integrate Supabase to handle waitlist submissions for the ShieldRoute landing page.

## Proposed Changes

### [Component Name] Waitlist Integration

#### [NEW] [supabaseClient.ts](file:///C:/Users/PE%20Computer/.gemini/antigravity/scratch/src/lib/supabaseClient.ts)
- Create a Supabase client using the provided URL and Publishable Key.
- Note: While the user requested `.js`, I will use `.ts` to maintain consistency with the existing TypeScript codebase.

#### [MODIFY] [WaitlistForm.tsx](file:///C:/Users/PE%20Computer/.gemini/antigravity/scratch/src/components/WaitlistForm.tsx)
- Import the Supabase client.
- Update the `onSubmit` handler to:
  - Insert form data into the `waitlist` table.
  - Handle success by showing the existing success message and triggering confetti.
  - Handle errors by showing a "Something went wrong" message.
- Maintain existing styling and form validation.

## Dependencies
- Install `@supabase/supabase-js`.

## Verification Plan

### Automated Tests
- N/A (Manual verification via browser tool).

### Manual Verification
- Submit the waitlist form with test data.
- Verify the "isSubmitting" state (spinner) works.
- Verify the success state (confetti + success message) appears.
- Verify (if possible via browser) that the request was sent to Supabase.
