import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingDown, BarChart3, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-2xl">
              <DollarSign className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">Expense Tracker</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Take control of your finances with our easy-to-use expense tracking application.
            Monitor your spending, categorize expenses, and visualize your financial habits.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/auth")}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-6 rounded-lg border text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Track Expenses</h3>
            <p className="text-muted-foreground text-sm">
              Easily log all your expenses with detailed information and categories
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border text-center">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Visualize Data</h3>
            <p className="text-muted-foreground text-sm">
              See your spending patterns with intuitive charts and breakdowns
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border text-center">
            <div className="bg-chart-3/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-chart-3" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
            <p className="text-muted-foreground text-sm">
              Your financial data is encrypted and accessible only to you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
