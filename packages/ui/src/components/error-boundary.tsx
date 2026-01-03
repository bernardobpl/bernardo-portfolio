import * as React from 'react';

export class ErrorBoundary extends React.Component<{fallback: React.ReactNode; children: React.ReactNode}, {hasError: boolean}> {
  state: { hasError: boolean; };
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}