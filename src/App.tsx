import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from "framer-motion";
import { Users, DollarSign, Database } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Web3Health</h1>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#marketplace" className="hover:text-blue-600">Marketplace</a>
          <a href="#about" className="hover:text-blue-600">About</a>
        </nav>
        <Button>Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 md:px-20 py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          A Marketplace for Health Data
        </motion.h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Web3Health connects researchers seeking health data with individuals
          willing to share theirs — securely and transparently. Earn by
          contributing to studies that matter.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button>Join as User</Button>
          <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
            Post a Study
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 md:px-20 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Web3Health?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">For Researchers</h4>
              <p className="text-gray-600">
                Post health studies and directly access a diverse pool of
                participants, cutting time and costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <DollarSign className="h-10 w-10 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">For Users</h4>
              <p className="text-gray-600">
                Share your health data securely and get paid for contributing
                to meaningful research.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center text-center">
              <Database className="h-10 w-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Secure & Transparent</h4>
              <p className="text-gray-600">
                Powered by Web3, your data is protected with blockchain-backed
                transparency and security.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="px-6 md:px-20 py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Studies
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Sleep Patterns & Productivity", "Diet and Heart Health", "Mental Health & Workload"].map(
            (title, i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardContent>
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-gray-600 mb-4">
                    Researchers are seeking volunteers for this study. Share
                    your data and earn rewards.
                  </p>
                  <Button>View Study</Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-10 text-center bg-white border-t mt-auto">
        <p className="text-gray-600">© 2025 Web3Health. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
