import { Palette, Zap, Heart, Smartphone } from "lucide-react";

export function DesignRationale() {
  return (
    <section className="mb-16">
      <h2 className="mb-8">Design Rationale</h2>
      
      {/* Main Rationale */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
        <h3 className="mb-4 text-white">Core Design Philosophy</h3>
        <p className="text-lg leading-relaxed">
          The FitFlow app design prioritizes <strong>simplicity and motivation</strong> through a clean, modern interface that reduces cognitive load while maximizing visual feedback. We chose a vibrant gradient color palette (blue to purple) to evoke energy and progress, paired with generous white space to prevent overwhelm. The onboarding uses friendly illustrations to build confidence, while the settings screen employs clear visual hierarchy and grouped sections for easy navigation. Quick-access CTAs and prominent progress visualization ensure users can immediately see their achievements, addressing our research finding that 73% of users struggle with routine consistency. Every design decision supports the user's primary goal: making fitness tracking effortless and motivating.
        </p>
      </div>

      {/* Design Principles */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="mb-2">Visual Hierarchy</h4>
          <p className="text-sm text-muted-foreground">
            Clear typography scales and strategic use of color guide users through key actions without confusion.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="mb-2">Instant Feedback</h4>
          <p className="text-sm text-muted-foreground">
            Progress bars, animations, and real-time updates provide immediate visual confirmation of actions.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-pink-600" />
          </div>
          <h4 className="mb-2">Motivational Design</h4>
          <p className="text-sm text-muted-foreground">
            Warm colors, achievement badges, and encouraging copy maintain user engagement and commitment.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Smartphone className="w-6 h-6 text-green-600" />
          </div>
          <h4 className="mb-2">Mobile-First</h4>
          <p className="text-sm text-muted-foreground">
            Thumb-friendly tap targets and bottom navigation ensure comfortable one-handed use during workouts.
          </p>
        </div>
      </div>

      {/* Design System Preview */}
      <div className="mt-8 bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h3 className="mb-6">Design System Elements</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Color Palette */}
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-500">Color Palette</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-600 shadow" />
                <div>
                  <div className="font-medium">Primary Blue</div>
                  <div className="text-xs text-gray-500">#2563EB</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-purple-600 shadow" />
                <div>
                  <div className="font-medium">Accent Purple</div>
                  <div className="text-xs text-gray-500">#9333EA</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-green-500 shadow" />
                <div>
                  <div className="font-medium">Success Green</div>
                  <div className="text-xs text-gray-500">#22C55E</div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-500">Typography</h4>
            <div className="space-y-3">
              <div>
                <div className="text-xl font-semibold">Heading Large</div>
                <div className="text-xs text-gray-500">20px / Semibold</div>
              </div>
              <div>
                <div className="font-medium">Body Medium</div>
                <div className="text-xs text-gray-500">16px / Medium</div>
              </div>
              <div>
                <div className="text-sm">Body Small</div>
                <div className="text-xs text-gray-500">14px / Regular</div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-500">Key Components</h4>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl text-sm">
                Primary Button
              </button>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-xl text-sm">
                Secondary Button
              </button>
              <div className="w-full bg-gray-100 rounded-lg p-3 border border-gray-200 text-sm">
                Input Field
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
