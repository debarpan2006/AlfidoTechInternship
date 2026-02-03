import { User, Target, TrendingUp, Heart } from "lucide-react";

interface PersonaProps {
  image: string;
}

export function UserPersona({ image }: PersonaProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-8">User Persona</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Photo and Basic Info */}
          <div className="md:col-span-1">
            <img 
              src={image}
              alt="Sarah Johnson"
              className="w-full aspect-square object-cover rounded-xl mb-4"
            />
            <h3 className="mb-2">Sarah Johnson</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Age:</strong> 28</p>
              <p><strong>Occupation:</strong> Marketing Manager</p>
              <p><strong>Location:</strong> Seattle, WA</p>
              <p><strong>Tech Savviness:</strong> High</p>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Quote */}
            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
              <p className="italic">"I want to stay healthy and fit, but my busy schedule makes it hard to stick to a routine. I need something that adapts to my lifestyle."</p>
            </div>

            {/* Goals */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h4>Goals</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground pl-7">
                <li>• Maintain consistent workout routine despite irregular work hours</li>
                <li>• Track progress and see measurable improvements</li>
                <li>• Find quick, effective workouts that fit into busy days</li>
                <li>• Stay motivated with community support</li>
              </ul>
            </div>

            {/* Frustrations */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-destructive" />
                <h4>Frustrations</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground pl-7">
                <li>• Generic workout plans that don't fit her schedule</li>
                <li>• Complicated apps with too many features</li>
                <li>• Losing motivation when progress isn't visible</li>
                <li>• Difficulty finding time for hour-long gym sessions</li>
              </ul>
            </div>

            {/* Motivations */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-chart-1" />
                <h4>Motivations</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground pl-7">
                <li>• Wants to feel energized throughout the day</li>
                <li>• Enjoys seeing visual progress and achievements</li>
                <li>• Values efficiency and time-saving solutions</li>
                <li>• Inspired by success stories from peers</li>
              </ul>
            </div>

            {/* Tech Usage */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-5 h-5 text-primary" />
                <h4>Technology Usage</h4>
              </div>
              <p className="text-muted-foreground">Uses smartphone daily for productivity apps, social media, and health tracking. Comfortable with app-based solutions and wearable technology. Values clean, intuitive interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
