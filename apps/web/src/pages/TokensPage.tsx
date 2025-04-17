export default function TokensPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Design Tokens</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorToken name="Primary" color="#3B82F6" />
          <ColorToken name="Primary Light" color="#93C5FD" />
          <ColorToken name="Primary Dark" color="#1D4ED8" />
          <ColorToken name="Secondary" color="#10B981" />
          <ColorToken name="Secondary Light" color="#6EE7B7" />
          <ColorToken name="Secondary Dark" color="#047857" />
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <div className="text-xs text-gray-500 mb-1">xs (0.75rem)</div>
            <div className="text-xs">The quick brown fox jumps over the lazy dog</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-xs text-gray-500 mb-1">base (1rem)</div>
            <div className="text-base">The quick brown fox jumps over the lazy dog</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-xs text-gray-500 mb-1">2xl (1.5rem)</div>
            <div className="text-2xl">The quick brown fox jumps over the lazy dog</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-xs text-gray-500 mb-1">4xl (2.25rem)</div>
            <div className="text-4xl">The quick brown fox jumps over the lazy dog</div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Spacing</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded flex items-center">
            <div className="w-4 h-4 bg-primary"></div>
            <div className="text-sm ml-2">4 (1rem)</div>
          </div>
          <div className="p-4 border rounded flex items-center">
            <div className="w-8 h-8 bg-primary"></div>
            <div className="text-sm ml-2">8 (2rem)</div>
          </div>
          <div className="p-4 border rounded flex items-center">
            <div className="w-16 h-16 bg-primary"></div>
            <div className="text-sm ml-2">16 (4rem)</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ColorToken({ name, color }: { name: string; color: string }) {
  return (
    <div className="border rounded overflow-hidden">
      <div className="h-24" style={{ backgroundColor: color }}></div>
      <div className="p-2">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-500 font-mono">{color}</div>
      </div>
    </div>
  );
} 