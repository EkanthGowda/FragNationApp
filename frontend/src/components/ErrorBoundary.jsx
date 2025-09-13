import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleTryAgain = () => {
    this.setState({ hasError: false });
    // Optionally, trigger a page reload or reset logic
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="mb-6"
            >
              <AlertTriangle
                className="mx-auto text-red-500"
                size={64}
                strokeWidth={3}
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Oops, Something Went Wrong!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              We encountered an unexpected issue. Please try again or contact
              support if the problem persists.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleTryAgain}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Try Again
            </motion.button>
          </motion.div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
