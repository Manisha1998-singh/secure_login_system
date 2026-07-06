import Link from "next/link";
import { Show, SignInButton, SignOutButton } from "@clerk/nextjs";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <h1 className="text-xl font-semibold">Next.js App mannu</h1>
          </div>

          <div className="flex items-center gap-4">
            <Show when="signed-out">
              <SignInButton />
            </Show>

            <Show when="signed-in">
              <Link href="/user-profile">Profile</Link>
              <SignOutButton />
            </Show>
          </div>
        </div>
      </div>
    </nav>
  );
};
