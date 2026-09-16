import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrap dark-section" role="alert">
          <div className="container error-boundary-content">
            <div className="error-icon-box">
              <AlertTriangle size={36} className="text-gold" />
            </div>
            <h1 className="error-title">System Interruption</h1>
            <p className="error-desc">
              We encountered an unexpected issue while rendering this section of the Durga Rice Mill portal.
              Our systems are self-healing, and reloading the page will restore normal operation.
            </p>
            <div className="error-actions">
              <button type="button" className="btn-gold" onClick={this.handleReload}>
                <RefreshCw size={16} />
                <span>Reload Page</span>
              </button>
              <button type="button" className="btn-outline-gold" onClick={this.handleGoHome}>
                <Home size={16} />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
