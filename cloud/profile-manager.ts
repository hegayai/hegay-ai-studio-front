interface Profile {
  id: string;
  name: string;
  preferences: Record<string, any>;
  updatedAt: string;
}

let profile: Profile | null = null;

export function loadProfile() {
  return profile;
}

export function saveProfile(name: string, preferences: Record<string, any>) {
  profile = {
    id: "profile-1",
    name,
    preferences,
    updatedAt: new Date().toISOString(),
  };

  return {
    success: true,
    profile,
  };
}

export function updatePreferences(newPrefs: Record<string, any>) {
  if (!profile) return { error: "Profile not initialized." };

  profile.preferences = { ...profile.preferences, ...newPrefs };
  profile.updatedAt = new Date().toISOString();

  return {
    success: true,
    profile,
  };
}
