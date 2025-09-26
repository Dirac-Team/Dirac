import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { addToWaitlist } from '../lib/firebase';
import { sendWaitlistConfirmation } from '../lib/resend';

interface WaitlistSectionProps {
  className?: string;
}

export function WaitlistSection({ className = '' }: WaitlistSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Add to Firebase
      const firebaseResult = await addToWaitlist(email);
      
      if (!firebaseResult.success) {
        throw new Error('Failed to save email to database');
      }

      // Send confirmation email
      const emailResult = await sendWaitlistConfirmation(email);
      
      if (!emailResult.success) {
        console.warn('Email saved but confirmation email failed to send');
      }

      setStatus('success');
      setMessage('Welcome to the waitlist! Check your email for confirmation.');
      setEmail('');
    } catch (error) {
      console.error('Waitlist signup error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div 
      className={`bg-black/60 backdrop-blur-sm rounded-2xl border border-[#78AAFF]/30 p-8 max-w-md mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] rounded-full mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
        <p className="text-white/70 text-sm">
          Be the first to experience Dirac when we launch
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/40 border-[#78AAFF]/30 text-white placeholder:text-white/50 focus:border-[#78AAFF] focus:ring-[#78AAFF]/20"
            disabled={status === 'loading'}
          />
        </div>

        <Button
          type="submit"
          disabled={status === 'loading' || !email}
          className="w-full bg-gradient-to-r from-[#78AAFF] to-[#9BB5FF] hover:from-[#6A9EFF] hover:to-[#8AABFF] text-white border-0 shadow-lg group relative overflow-hidden"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
            </>
          )}
        </Button>
      </form>

      {message && (
        <motion.div
          className={`mt-4 p-3 rounded-lg flex items-center space-x-2 ${
            status === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
              : 'bg-red-500/20 border border-red-500/30 text-red-400'
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {status === 'success' ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span className="text-sm">{message}</span>
        </motion.div>
      )}
    </motion.div>
  );
}