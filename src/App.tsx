import { useState } from 'react'
    import { ArrowRight, Check, Star } from 'lucide-react'

    export default function App() {
      const [email, setEmail] = useState('')

      const features = [
        {
          icon: <Check className="w-6 h-6" />,
          title: "Real-time Analytics",
          desc: "Get instant insights with our powerful analytics dashboard."
        },
        {
          icon: <Check className="w-6 h-6" />,
          title: "Team Collaboration",
          desc: "Work seamlessly with your team in real-time."
        },
        {
          icon: <Check className="w-6 h-6" />,
          title: "Secure Cloud Storage",
          desc: "Your data is safe with our enterprise-grade security."
        }
      ]

      const pricing = [
        {
          name: "Starter",
          price: "$29",
          features: [
            "Up to 5 users",
            "Basic analytics",
            "Email support"
          ]
        },
        {
          name: "Pro",
          price: "$99",
          features: [
            "Up to 20 users",
            "Advanced analytics",
            "Priority support"
          ]
        }
      ]

      return (
        <div className="bg-white">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  Transform Your Business
                </h1>
                <p className="mt-4 text-xl text-blue-100">
                  The all-in-one platform for modern teams
                </p>
                <div className="mt-8">
                  <div className="max-w-md mx-auto">
                    <div className="flex rounded-md shadow-sm">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 p-3 rounded-l-md"
                        placeholder="Enter your email"
                      />
                      <button
                        className="bg-blue-500 text-white px-6 rounded-r-md hover:bg-blue-600 transition-colors"
                      >
                        Get Started <ArrowRight className="inline ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Everything You Need</h2>
              <p className="mt-4 text-gray-600">
                All the tools to grow your business in one place
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg">
                  <div className="text-blue-600">{feature.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold">Simple Pricing</h2>
                <p className="mt-4 text-gray-600">
                  Choose the plan that's right for you
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {pricing.map((plan, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 text-4xl font-bold">{plan.price}</div>
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <p className="text-gray-400">
                  © 2023 SaaS Platform. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )
    }
