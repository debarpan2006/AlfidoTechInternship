import { ChevronRight, Bell, Lock, User, Moon, Globe, HelpCircle, LogOut, Dumbbell, Target, TrendingUp } from "lucide-react";

export function HighFidelityMockups() {
  return (
    <section className="mb-16">
      <h2 className="mb-4">High-Fidelity Mockups</h2>
      <p className="text-muted-foreground mb-8">Detailed design for key screens</p>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Onboarding Screen */}
        <div>
          <h3 className="mb-6 text-center">Onboarding Screen</h3>
          <div className="bg-gray-100 rounded-2xl shadow-2xl p-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden mx-auto" style={{ width: '320px', height: '640px' }}>
              {/* Status Bar */}
              <div className="bg-white px-6 pt-3 pb-2">
                <div className="flex justify-between items-center text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 border border-black rounded-sm" />
                    <div className="w-6 h-3 border border-black rounded-sm relative">
                      <div className="absolute inset-0.5 bg-black rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 h-full flex flex-col bg-gradient-to-b from-blue-50 to-purple-50">
                {/* Skip Button */}
                <div className="flex justify-end mb-4">
                  <button className="text-sm text-gray-500 px-4 py-2">Skip</button>
                </div>

                {/* Illustration */}
                <div className="flex-1 flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Dumbbell className="w-20 h-20 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center mb-8">
                  <h2 className="mb-3">Track Your Fitness Journey</h2>
                  <p className="text-gray-600">Get personalized workouts that adapt to your schedule and fitness level. Stay motivated with progress tracking.</p>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mb-6">
                  <div className="w-8 h-2 bg-blue-600 rounded-full" />
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Screen */}
        <div>
          <h3 className="mb-6 text-center">Settings Screen</h3>
          <div className="bg-gray-100 rounded-2xl shadow-2xl p-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden mx-auto" style={{ width: '320px', height: '640px' }}>
              {/* Status Bar */}
              <div className="bg-white px-6 pt-3 pb-2">
                <div className="flex justify-between items-center text-xs">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 border border-black rounded-sm" />
                    <div className="w-6 h-3 border border-black rounded-sm relative">
                      <div className="absolute inset-0.5 bg-black rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="px-6 pt-4 pb-4 bg-white border-b border-gray-100">
                <h2>Settings</h2>
              </div>

              {/* Content */}
              <div className="px-6 py-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
                {/* Profile Section */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 mb-6 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm opacity-90">sarah.j@email.com</div>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  </div>
                </div>

                {/* Settings Groups */}
                <div className="space-y-6">
                  {/* Account Settings */}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Account</div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <SettingsItem icon={<User className="w-5 h-5" />} label="Edit Profile" />
                      <div className="border-t border-gray-200" />
                      <SettingsItem icon={<Bell className="w-5 h-5" />} label="Notifications" badge="3" />
                      <div className="border-t border-gray-200" />
                      <SettingsItem icon={<Lock className="w-5 h-5" />} label="Privacy" />
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Preferences</div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <SettingsItem icon={<Moon className="w-5 h-5" />} label="Dark Mode" toggle />
                      <div className="border-t border-gray-200" />
                      <SettingsItem icon={<Globe className="w-5 h-5" />} label="Language" value="English" />
                    </div>
                  </div>

                  {/* Support */}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-3 px-2">Support</div>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <SettingsItem icon={<HelpCircle className="w-5 h-5" />} label="Help Center" />
                      <div className="border-t border-gray-200" />
                      <SettingsItem icon={<LogOut className="w-5 h-5" />} label="Log Out" destructive />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SettingsItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  value?: string;
  toggle?: boolean;
  destructive?: boolean;
}

function SettingsItem({ icon, label, badge, value, toggle, destructive }: SettingsItemProps) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${destructive ? 'text-red-600' : 'text-gray-900'}`}>
      <div className={destructive ? 'text-red-600' : 'text-gray-600'}>{icon}</div>
      <span className="flex-1">{label}</span>
      {badge && (
        <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
      )}
      {value && (
        <span className="text-gray-500 text-sm">{value}</span>
      )}
      {toggle && (
        <div className="w-11 h-6 bg-gray-300 rounded-full relative">
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
        </div>
      )}
      {!toggle && !value && !badge && (
        <ChevronRight className="w-5 h-5 text-gray-400" />
      )}
    </div>
  );
}
