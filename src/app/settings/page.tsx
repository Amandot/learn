import SettingsForm from "@/components/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-text">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Customize your learning experience
        </p>
      </div>
      <SettingsForm />
    </div>
  );
}
