import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendWaitlistConfirmation = async (email: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Dirac <peter@dirac.app>',
      to: [email],
      subject: 'Welcome to the Dirac Waitlist! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #78AAFF; font-size: 32px; margin: 0;">Dirac</h1>
            <p style="color: #666; font-size: 16px; margin: 10px 0 0 0;">AI-Powered Platform</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #78AAFF, #9BB5FF); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h2 style="color: white; margin: 0 0 15px 0; font-size: 24px;">Welcome to the Waitlist!</h2>
            <p style="color: white; margin: 0; font-size: 16px; opacity: 0.9;">
              Thank you for joining the Dirac community. You're now on the list to be among the first to experience our revolutionary AI platform.
            </p>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">What's Next?</h3>
            <ul style="color: #666; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>We'll notify you as soon as Dirac is ready for early access</li>
              <li>You'll get exclusive updates about new features and releases</li>
              <li>Priority access to beta testing opportunities</li>
              <li>Special early-bird pricing when we launch</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-bottom: 30px;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              In the meantime, follow us on social media for the latest updates:
            </p>
            <div style="margin-top: 15px;">
              <a href="#" style="color: #78AAFF; text-decoration: none; margin: 0 10px;">Twitter</a>
              <a href="#" style="color: #78AAFF; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              <a href="#" style="color: #78AAFF; text-decoration: none; margin: 0 10px;">Discord</a>
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This email was sent to ${email}. If you didn't sign up for the Dirac waitlist, you can safely ignore this email.
            </p>
            <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
              © 2024 Dirac. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data: data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error };
  }
}; 