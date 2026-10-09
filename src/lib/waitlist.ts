export type WaitlistResult = { ok: true } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

/* ==========================================================================
   >>> WAITLIST SUBMIT — wire this to Supabase later. <<<

   This is the ONLY place the form's submit logic lives. Right now it does not
   talk to any backend: it waits a moment and reports success so the UI states
   can be tested.

   When you connect Supabase, replace the body with something like:

     const { error } = await supabase.from("waitlist").insert({ email });
     if (error) return { ok: false, error: "Something went wrong. Try again." };
     return { ok: true };

   Keep the service-role key off the client: either use an anon key with an
   insert-only RLS policy, or call a Next.js route handler / server action.
   ========================================================================== */
export async function submitWaitlist(email: string): Promise<WaitlistResult> {
  void email; // TODO: send to Supabase
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}
