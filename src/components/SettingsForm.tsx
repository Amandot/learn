"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Palette, Check } from "lucide-react";
import { useProfileName, setProfileName } from "@/hooks/useProfileName";

export default function SettingsForm() {
  const profileName = useProfileName();
  const [name, setName] = useState(profileName);
  const [email] = useState("student@luminalearn.app");
  const [notifications, setNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setProfileName(name);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <section className="glass-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <User size={18} className="text-accent-purple" />
          <h2 className="text-lg font-semibold">Profile</h2>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="text-xs text-muted-foreground mb-1.5 block">
              Display Name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="settings-input w-full"
            />
          </label>
          <label className="block">
            <span className="text-xs text-muted-foreground mb-1.5 block">
              Email
            </span>
            <input
              type="email"
              value={email}
              readOnly
              className="settings-input w-full opacity-60 cursor-not-allowed"
            />
          </label>
        </div>
      </section>

      <section className="glass-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell size={18} className="text-accent-cyan" />
          <h2 className="text-lg font-semibold">Notifications</h2>
        </div>
        <div className="space-y-4">
          <ToggleRow
            label="Push notifications"
            description="Get reminded to continue learning"
            checked={notifications}
            onChange={setNotifications}
          />
          <ToggleRow
            label="Weekly progress digest"
            description="Summary of your learning each Sunday"
            checked={weeklyDigest}
            onChange={setWeeklyDigest}
          />
        </div>
      </section>

      <section className="glass-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <Palette size={18} className="text-accent-blue" />
          <h2 className="text-lg font-semibold">Appearance</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Dark mode is enabled by default for the best learning experience.
        </p>
        <div className="flex gap-3 mt-4">
          <div className="w-12 h-12 rounded-xl bg-[#09090b] border-2 border-accent-purple ring-2 ring-accent-purple/30" />
          <div className="w-12 h-12 rounded-xl bg-[#f4f4f5] border border-border opacity-40 cursor-not-allowed" title="Light mode coming soon" />
        </div>
      </section>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={handleSave}
        className="btn-primary"
      >
        {saved ? (
          <>
            <Check size={16} />
            Saved!
          </>
        ) : (
          "Save Changes"
        )}
      </motion.button>
    </div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          checked ? "bg-accent-purple" : "bg-white/10"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
