import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { useState } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! We\'ll be in touch within 24 hours.', {
        description: 'Thank you for your interest in Atelier Lumière.',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4 mb-6">
              Start Your
              <br />
              <span className="text-gradient-gold">Design Journey</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-md">
              Ready to see your space in stunning 3D? Book a complimentary consultation and let's bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@atelierlumiere.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+33 1 42 68 53 00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Studio</p>
                  <p className="font-medium">18 Rue du Faubourg Saint-Honoré, Paris</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card/50 border border-border rounded-xl p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-light">First Name</Label>
                  <Input id="firstName" placeholder="Élise" required className="bg-background/50 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-light">Last Name</Label>
                  <Input id="lastName" placeholder="Moreau" required className="bg-background/50 border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-light">Email</Label>
                <Input id="email" type="email" placeholder="elise@example.com" required className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-sm font-light">Service Interest</Label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-border">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3d-visualization">3D Visualization</SelectItem>
                    <SelectItem value="virtual-tour">Virtual Walkthrough</SelectItem>
                    <SelectItem value="interior-design">Interior Design</SelectItem>
                    <SelectItem value="space-planning">Space Planning</SelectItem>
                    <SelectItem value="animation">Animation & Film</SelectItem>
                    <SelectItem value="full-service">Full Service Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-light">Tell Us About Your Project</Label>
                <Textarea
                  id="message"
                  placeholder="Describe your space, style preferences, and timeline..."
                  rows={4}
                  required
                  className="bg-background/50 border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-gold text-background font-medium tracking-wider uppercase text-xs py-6 hover:opacity-90 transition-opacity gap-2"
              >
                {sending ? 'Sending...' : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
