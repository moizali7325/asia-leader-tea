import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error tracking service here (e.g., Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center p-6">
          <div className="glass-dark p-12 rounded-[32px] border border-gold/30 max-w-md text-center">
            <div className="text-6xl mb-6">🔧</div>
            <h1 className="text-3xl font-serif font-black text-gold mb-4">Oops! Something went wrong</h1>
            <p className="text-text-main opacity-70 mb-8">We apologize for the inconvenience. Please refresh the page to try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-accent transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
