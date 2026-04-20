"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { HomeLaunchOverlay } from "./home-launch";
import { WaitlistCard, displayFontClass } from "./marketing";

const ACCESS_KEY = "aerotarot-site-access";
const GATE_LAUNCH_KEY = "aerotarot-gate-launch-seen";

export function SiteGate({ children }: { children: React.ReactNode }) {
  const expectedPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD?.trim() ?? "";
  const gateEnabled = expectedPassword.length > 0;

  const [launchComplete, setLaunchComplete] = useState(!gateEnabled);
  const [status, setStatus] = useState<"checking" | "locked" | "unlocked">(
    gateEnabled ? "checking" : "unlocked",
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!gateEnabled) {
      return;
    }

    const stored = window.sessionStorage.getItem(ACCESS_KEY);
    const nextStatus = stored === expectedPassword ? "unlocked" : "locked";
    const timer = window.setTimeout(() => setStatus(nextStatus), 0);

    return () => window.clearTimeout(timer);
  }, [expectedPassword, gateEnabled]);

  const helper = useMemo(() => {
    if (!gateEnabled) {
      return "Set NEXT_PUBLIC_SITE_PASSWORD in .env.local to enable private preview mode.";
    }

    return "Enter the shared preview password to continue.";
  }, [gateEnabled]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === expectedPassword) {
      window.sessionStorage.setItem(ACCESS_KEY, expectedPassword);
      setError("");
      setStatus("unlocked");
      return;
    }

    setError("That password didn't match.");
  };

  if (!launchComplete) {
    return (
      <HomeLaunchOverlay
        storageKey={GATE_LAUNCH_KEY}
        onComplete={() => setLaunchComplete(true)}
      />
    );
  }

  if (status === "unlocked") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(121,77,255,0.24),transparent_24%),radial-gradient(circle_at_50%_76%,rgba(244,196,110,0.08),transparent_18%),linear-gradient(180deg,#020204_0%,#050508_44%,#020203_100%)]" />
      <div className="relative px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-10 py-8">
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7 text-center shadow-[0_30px_120px_rgba(0,0,0,0.58)] backdrop-blur-md sm:p-9">
            <p className="text-[0.72rem] uppercase tracking-[0.38em] text-white/56">
              AeroTarot
            </p>
            <h1
              className={`${displayFontClass} mt-5 text-4xl leading-none tracking-[-0.04em] text-white`}
            >
              Private Preview
            </h1>
            <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
              {helper}
            </p>

            {status === "checking" ? (
              <div className="mt-8 h-12 rounded-full border border-white/10 bg-white/[0.03]" />
            ) : (
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="sr-only">Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (error) {
                        setError("");
                      }
                    }}
                    placeholder="Enter password"
                    className="min-h-12 w-full rounded-full border border-white/12 bg-white/[0.03] px-5 text-white outline-none transition placeholder:text-white/30 focus:border-amber-100/35"
                    autoComplete="current-password"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-amber-200/35 bg-[linear-gradient(135deg,rgba(255,233,173,0.26),rgba(149,110,255,0.24))] px-6 text-sm font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:border-amber-100/60 hover:bg-[linear-gradient(135deg,rgba(255,233,173,0.36),rgba(149,110,255,0.3))]"
                >
                  Enter Site
                </button>
              </form>
            )}

            {error ? (
              <p className="mt-4 text-sm text-amber-100/80">{error}</p>
            ) : null}
          </div>

          <WaitlistCard source="private-preview-gate" />
        </div>
      </div>
    </div>
  );
}
