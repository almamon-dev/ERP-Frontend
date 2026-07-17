import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/Form/TextInput';

export default function FeedbackPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(-1);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans flex flex-col">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center sticky top-0 z-20">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/admin/modules')} className="text-gray-500 hover:text-gray-900 -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="text-sm font-semibold text-gray-900">Support Center</div>
        </div>
      </header>

      {/* Main Split Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center">
        
        {/* Left Side: Info & Graphic */}
        <div className="w-full lg:w-5/12 bg-gray-900 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden h-full min-h-[400px] flex flex-col justify-between">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold tracking-tight mb-3 leading-tight">
              We'd love to hear your thoughts.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your feedback helps us refine the Enterprise OS experience. Drop us a message, report a bug, or suggest a new feature.
            </p>
          </div>

          <div className="relative z-10 space-y-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email Us</p>
                <p className="font-medium text-white">support@enterprise.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Us</p>
                <p className="font-medium text-white">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Headquarters</p>
                <p className="font-medium text-white">123 Tech Avenue, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Feedback Form */}
        <div className="w-full lg:w-7/12 lg:pl-12 py-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <TextInput 
                    type="text" 
                    placeholder="John"
                    required
                    className="w-full bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <TextInput 
                    type="text" 
                    placeholder="Doe"
                    required
                    className="w-full bg-gray-50 border-gray-200 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <TextInput 
                  type="text" 
                  placeholder="e.g., Feature Request or Bug Report"
                  required
                  className="w-full bg-gray-50 border-gray-200 focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Feedback Details</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us what you think or what we can improve..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-y"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-sm font-semibold rounded-xl bg-gray-900 hover:bg-gray-800 text-white transition-colors shadow-lg shadow-gray-900/20">
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

      </main>
    </div>
  );
}
