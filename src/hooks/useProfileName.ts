"use client";

import { useSyncExternalStore } from "react";

export const PROFILE_NAME_KEY = "lumina-profile-name";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("lumina-profile-update", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("lumina-profile-update", callback);
  };
}

function getSnapshot() {
  return localStorage.getItem(PROFILE_NAME_KEY) || "Aman";
}

function getServerSnapshot() {
  return "Aman";
}

export function useProfileName() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setProfileName(name: string) {
  localStorage.setItem(PROFILE_NAME_KEY, name.trim() || "Aman");
  window.dispatchEvent(new Event("lumina-profile-update"));
}
