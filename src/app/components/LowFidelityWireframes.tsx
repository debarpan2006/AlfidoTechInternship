export function LowFidelityWireframes() {
  return (
    <section className="mb-16">
      <h2 className="mb-4">Low-Fidelity Wireframes</h2>
      <p className="text-muted-foreground mb-8">Initial concept sketches for core app screens</p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Home Screen Wireframe */}
        <div>
          <h4 className="mb-4 text-center">Home Screen</h4>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-300">
            {/* Phone Frame */}
            <div className="border-4 border-gray-800 rounded-3xl p-4 bg-gray-50 aspect-[9/19]">
              {/* Status Bar */}
              <div className="flex justify-between mb-4 text-xs">
                <div className="w-12 h-2 bg-gray-400 rounded" />
                <div className="flex gap-1">
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                </div>
              </div>
              
              {/* Header */}
              <div className="mb-4">
                <div className="w-24 h-6 bg-gray-400 rounded mb-2" />
                <div className="w-32 h-3 bg-gray-300 rounded" />
              </div>
              
              {/* Daily Stats Box */}
              <div className="border-2 border-gray-400 rounded-lg p-3 mb-4">
                <div className="w-20 h-3 bg-gray-400 rounded mb-3" />
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="w-full h-8 bg-gray-300 rounded mb-1" />
                    <div className="w-full h-2 bg-gray-300 rounded" />
                  </div>
                  <div>
                    <div className="w-full h-8 bg-gray-300 rounded mb-1" />
                    <div className="w-full h-2 bg-gray-300 rounded" />
                  </div>
                  <div>
                    <div className="w-full h-8 bg-gray-300 rounded mb-1" />
                    <div className="w-full h-2 bg-gray-300 rounded" />
                  </div>
                </div>
              </div>
              
              {/* Workout Card */}
              <div className="border-2 border-gray-400 rounded-lg p-3 mb-3">
                <div className="w-32 h-4 bg-gray-400 rounded mb-2" />
                <div className="w-24 h-2 bg-gray-300 rounded mb-3" />
                <div className="w-full h-8 bg-gray-800 rounded" />
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-8 left-4 right-4 border-t-2 border-gray-400 pt-2">
                <div className="flex justify-around">
                  <div className="w-6 h-6 bg-gray-800 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workout Screen Wireframe */}
        <div>
          <h4 className="mb-4 text-center">Workout Screen</h4>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-300">
            <div className="border-4 border-gray-800 rounded-3xl p-4 bg-gray-50 aspect-[9/19]">
              {/* Status Bar */}
              <div className="flex justify-between mb-4 text-xs">
                <div className="w-12 h-2 bg-gray-400 rounded" />
                <div className="flex gap-1">
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                </div>
              </div>
              
              {/* Back Button */}
              <div className="w-8 h-8 bg-gray-400 rounded-full mb-4" />
              
              {/* Exercise Image Placeholder */}
              <div className="w-full h-32 bg-gray-300 rounded-lg mb-4" />
              
              {/* Exercise Name */}
              <div className="w-40 h-5 bg-gray-400 rounded mb-2" />
              <div className="w-24 h-3 bg-gray-300 rounded mb-4" />
              
              {/* Sets List */}
              <div className="space-y-2 mb-4">
                <div className="border-2 border-gray-400 rounded p-2 flex justify-between">
                  <div className="w-12 h-4 bg-gray-400 rounded" />
                  <div className="w-16 h-4 bg-gray-300 rounded" />
                </div>
                <div className="border-2 border-gray-300 rounded p-2 flex justify-between">
                  <div className="w-12 h-4 bg-gray-300 rounded" />
                  <div className="w-16 h-4 bg-gray-300 rounded" />
                </div>
                <div className="border-2 border-gray-300 rounded p-2 flex justify-between">
                  <div className="w-12 h-4 bg-gray-300 rounded" />
                  <div className="w-16 h-4 bg-gray-300 rounded" />
                </div>
              </div>
              
              {/* Timer */}
              <div className="border-2 border-gray-400 rounded-lg p-3 text-center mb-4">
                <div className="w-24 h-8 bg-gray-400 rounded mx-auto" />
              </div>
              
              {/* Action Button */}
              <div className="w-full h-10 bg-gray-800 rounded" />
              
              {/* Bottom Nav */}
              <div className="absolute bottom-8 left-4 right-4 border-t-2 border-gray-400 pt-2">
                <div className="flex justify-around">
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-800 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Screen Wireframe */}
        <div>
          <h4 className="mb-4 text-center">Progress Screen</h4>
          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-300">
            <div className="border-4 border-gray-800 rounded-3xl p-4 bg-gray-50 aspect-[9/19]">
              {/* Status Bar */}
              <div className="flex justify-between mb-4 text-xs">
                <div className="w-12 h-2 bg-gray-400 rounded" />
                <div className="flex gap-1">
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                  <div className="w-3 h-2 bg-gray-400 rounded" />
                </div>
              </div>
              
              {/* Header */}
              <div className="mb-4">
                <div className="w-28 h-6 bg-gray-400 rounded mb-2" />
              </div>
              
              {/* Time Period Selector */}
              <div className="flex gap-2 mb-4">
                <div className="flex-1 h-8 bg-gray-800 rounded" />
                <div className="flex-1 h-8 bg-gray-300 rounded" />
                <div className="flex-1 h-8 bg-gray-300 rounded" />
              </div>
              
              {/* Chart Placeholder */}
              <div className="border-2 border-gray-400 rounded-lg p-3 mb-4">
                <div className="h-32 relative">
                  {/* Simple line graph representation */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1">
                    <div className="flex-1 h-12 bg-gray-300 rounded-t" />
                    <div className="flex-1 h-16 bg-gray-300 rounded-t" />
                    <div className="flex-1 h-20 bg-gray-400 rounded-t" />
                    <div className="flex-1 h-24 bg-gray-400 rounded-t" />
                    <div className="flex-1 h-28 bg-gray-400 rounded-t" />
                  </div>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="border-2 border-gray-400 rounded-lg p-2">
                  <div className="w-16 h-6 bg-gray-400 rounded mb-1" />
                  <div className="w-12 h-2 bg-gray-300 rounded" />
                </div>
                <div className="border-2 border-gray-400 rounded-lg p-2">
                  <div className="w-16 h-6 bg-gray-400 rounded mb-1" />
                  <div className="w-12 h-2 bg-gray-300 rounded" />
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-8 left-4 right-4 border-t-2 border-gray-400 pt-2">
                <div className="flex justify-around">
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                  <div className="w-6 h-6 bg-gray-800 rounded" />
                  <div className="w-6 h-6 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
