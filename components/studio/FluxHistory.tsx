"use client";

interface Item {
  id: string;
  url: string;
  prompt: string;
  mode: string;
}

export default function FluxHistory({
  items,
  onSelect,
}: {
  items: Item[];
  onSelect: (item: Item) => void;
}) {
  if (!items.length) {
    return (
      <div className="p-4 text-white/40 text-sm">
        Generated images will appear here as a history.
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="w-full flex gap-3 items-center text-left p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
        >
          <img
            src={item.url}
            alt="thumb"
            className="w-16 h-16 rounded-lg object-cover border border-white/20"
          />
          <div className="flex-1">
            <div className="text-xs text-white/60 mb-1">{item.mode}</div>
            <div className="text-sm text-white line-clamp-2">{item.prompt}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
