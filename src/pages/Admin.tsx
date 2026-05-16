import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Database, RefreshCw, ExternalLink, Calendar, User, Phone, Mail, MessageSquare, Lock, LogIn, Eye, EyeOff } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

interface Lead {
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Hardcoded credentials
  const ADMIN_EMAIL = "ansar@admin.com";
  const ADMIN_PASSWORD = "Borabanda@123";

  // Check for existing session
  useEffect(() => {
    const session = localStorage.getItem('admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Simulate a brief delay for a better UX
    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_session', 'true');
        toast.success("Welcome back, Ansar!");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
      setIsLoggingIn(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_session');
    toast.info("Logged out successfully");
  };

  // Using the same URL provided by the user
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQUgFWRZeYhth8CzpTLExEnLBx6xZbAyPF01h73eLx2H8fteRzjgpF4QzG6xflVg6qoA/exec";

  const fetchLeads = async () => {
    if (!isAuthenticated) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(SCRIPT_URL);
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setLeads(data.reverse());
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch leads. Make sure you have implemented the doGet() function in your Apps Script.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="bg-ivory text-charcoal min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-ivory-dark shadow-hard relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-copper/5 rounded-full -mr-16 -mt-16 blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-copper/10 flex items-center justify-center text-copper">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-charcoal">Admin <span className="italic text-copper font-light">Portal</span></h2>
                    <p className="text-charcoal/40 text-xs font-grotesk tracking-widest uppercase">Secure Access Only</p>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-grotesk tracking-widest uppercase text-charcoal/60 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                      <Input 
                        type="email" 
                        placeholder="admin@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-11 h-12 bg-ivory/30 border-ivory-dark focus:ring-copper/20 focus:border-copper rounded-xl font-body"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-grotesk tracking-widest uppercase text-charcoal/60 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                      <Input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-11 pr-11 h-12 bg-ivory/30 border-ivory-dark focus:ring-copper/20 focus:border-copper rounded-xl font-body"
                      />
                      <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-copper transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoggingIn}
                    className="w-full h-12 bg-charcoal hover:bg-charcoal/90 text-white rounded-xl font-grotesk font-bold tracking-widest uppercase transition-all shadow-lg hover:shadow-charcoal/20 flex items-center justify-center gap-2 group"
                  >
                    {isLoggingIn ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Sign In <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <p className="text-center mt-8 text-charcoal/40 font-body text-xs">
              Protected by Nexlane Interiors Security Systems
            </p>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-ivory text-charcoal selection:bg-copper selection:text-white min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-copper" />
                <span className="section-label text-copper uppercase tracking-[0.2em]">Dashboard</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl text-charcoal">
                Lead <span className="italic font-light text-copper">Management</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={fetchLeads}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-ivory-dark rounded-xl shadow-soft hover:shadow-medium transition-all text-sm font-grotesk font-bold tracking-widest uppercase disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh Data
              </button>
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 border border-red-100 rounded-xl shadow-soft hover:bg-red-100 transition-all text-sm font-grotesk font-bold tracking-widest uppercase"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
             <div className="bg-white p-6 rounded-2xl border border-ivory-dark shadow-soft">
                <p className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 mb-2">Total Leads</p>
                <p className="font-display text-3xl text-charcoal">{leads.length}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-ivory-dark shadow-soft">
                <p className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 mb-2">Active Inquiries</p>
                <p className="font-display text-3xl text-copper">{leads.filter(l => l.subject !== 'General Inquiry').length}</p>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-ivory-dark shadow-soft">
                <p className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 mb-2">Spreadsheet Status</p>
                <div className="flex items-center gap-2 text-green-500 font-display text-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Connected
                </div>
             </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl border border-ivory-dark shadow-hard overflow-hidden">
            {isLoading ? (
              <div className="py-32 flex flex-col items-center justify-center gap-4">
                <RefreshCw className="w-8 h-8 text-copper animate-spin" />
                <p className="font-body text-charcoal/40 text-sm">Fetching your leads...</p>
              </div>
            ) : error ? (
              <div className="py-32 flex flex-col items-center justify-center gap-6 text-center px-6">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                  <Database className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h3 className="font-display text-xl text-charcoal mb-2">Connection Issue</h3>
                  <p className="font-body text-charcoal/60 text-sm mb-6">{error}</p>
                  <a 
                    href="https://script.google.com/home" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-copper font-grotesk text-[0.7rem] tracking-widest uppercase font-bold border-b border-copper/30 pb-1 hover:border-copper transition-all"
                  >
                    Open Google Apps Script <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ) : leads.length === 0 ? (
              <div className="py-32 text-center">
                <p className="font-body text-charcoal/40 italic">No leads found in your spreadsheet yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-ivory/50 border-b border-ivory-dark">
                      <th className="px-8 py-5 font-grotesk text-[0.65rem] tracking-widest uppercase text-charcoal/40">Date</th>
                      <th className="px-8 py-5 font-grotesk text-[0.65rem] tracking-widest uppercase text-charcoal/40">Contact</th>
                      <th className="px-8 py-5 font-grotesk text-[0.65rem] tracking-widest uppercase text-charcoal/40">Inquiry</th>
                      <th className="px-8 py-5 font-grotesk text-[0.65rem] tracking-widest uppercase text-charcoal/40">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ivory-dark">
                    {leads.map((lead, i) => (
                      <motion.tr 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="hover:bg-ivory/20 transition-colors"
                      >
                        <td className="px-8 py-6 align-top">
                          <div className="flex items-center gap-2 text-charcoal/40 mb-1">
                            <Calendar className="w-3 h-3" />
                            <span className="text-[0.65rem] font-grotesk tracking-wide uppercase">Received</span>
                          </div>
                          <p className="font-body text-sm text-charcoal/80">
                            {new Date(lead.timestamp).toLocaleDateString()}
                          </p>
                        </td>
                        <td className="px-8 py-6 align-top">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <User className="w-4 h-4 text-copper/50" />
                              <span className="font-display text-base font-medium text-charcoal">{lead.name}</span>
                            </div>
                            <div className="space-y-1.5 ml-7">
                              <div className="flex items-center gap-2 text-charcoal/60 hover:text-copper transition-colors cursor-pointer">
                                <Phone className="w-3 h-3" />
                                <span className="font-body text-xs">{lead.phone}</span>
                              </div>
                              <div className="flex items-center gap-2 text-charcoal/60 hover:text-copper transition-colors cursor-pointer">
                                <Mail className="w-3 h-3" />
                                <span className="font-body text-xs">{lead.email}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 align-top">
                          <span className="inline-block px-3 py-1 rounded-full bg-copper/10 text-copper font-grotesk text-[0.6rem] tracking-widest uppercase font-bold">
                            {lead.subject}
                          </span>
                        </td>
                        <td className="px-8 py-6 align-top max-w-sm">
                          <div className="flex items-start gap-3">
                            <MessageSquare className="w-4 h-4 text-copper/30 mt-1 flex-shrink-0" />
                            <p className="font-body text-sm text-charcoal/70 leading-relaxed italic">
                              "{lead.message}"
                            </p>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;

