export default function UserDashboard() {
  return (
    <div className="flex flex-col gap-12 max-w-6xl">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          User Dashboard
        </h1>
        <p className="opacity-70 mt-2 leading-relaxed max-w-2xl">
          Welcome to the Hegay OS creative universe. Explore storyworlds, realms,
          characters, cultures, timelines, and creative tools. This dashboard is
          your gateway into a living mythic‑creative ecosystem.
        </p>
      </div>
      {/* FEATURED UNIVERSES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Featured Universes</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Storyworld",
            "Aruwa Mythos",
            "NaijaMix Multiverse",
          ].map((uni) => (
            <div
              key={uni}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{uni}</h3>
              <p className="opacity-70 text-sm mt-1">Enter universe</p>
            </div>
          ))}
        </div>
      </section>
      {/* REALMS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Realms</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Realm",
            "Aruwa Realm",
            "NaijaMix Culture Realm",
          ].map((realm) => (
            <div
              key={realm}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{realm}</h3>
              <p className="opacity-70 text-sm mt-1">Explore realm</p>
            </div>
          ))}
        </div>
      </section>
      {/* CHARACTERS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Characters</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Aruwa — Dawn Incarnate",
            "Kehinde — Twin Walker",
            "Zara — Frequency Weaver",
          ].map((char) => (
            <div
              key={char}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{char}</h3>
              <p className="opacity-70 text-sm mt-1">View profile</p>
            </div>
          ))}
        </div>
      </section>
      {/* CULTURES */}
      <section>
        <h2 className="text-xl font-medium mb-4">Cultures</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Diaspora Culture Grid",
            "Aruwa Mythic Culture",
            "NaijaMix Cultural Matrix",
          ].map((culture) => (
            <div
              key={culture}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{culture}</h3>
              <p className="opacity-70 text-sm mt-1">Explore culture</p>
            </div>
          ))}
        </div>
      </section>
      {/* CREATIVE TOOLS */}
      <section>
        <h2 className="text-xl font-medium mb-4">Creative Tools</h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            "Chat Engine",
            "Image Engine",
            "Motion Engine",
            "Music Engine",
            "Script Engine",
            "Voice Engine",
          ].map((tool) => (
            <div
              key={tool}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="font-medium">{tool}</h3>
              <p className="opacity-70 text-sm mt-1">Open tool</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
