import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";

export default async function AnotherPage() {
  const supabase = createServerComponentClient({
    cookies: () => (cookies() as unknown as UnsafeUnwrappedCookies),
  });
  const { data: session } = await supabase.auth.getSession();

  return (
    <div>
      <h1>Another Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
