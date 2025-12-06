import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: ['Sadaat E Amroha Society', 'Gulzar E Hijri Scheme 33', 'Karachi, Pakistan'],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['03362257288'],
      link: 'tel:03362257288',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: ['Monday - Sunday', '11:00 AM - 11:00 PM'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8B0000]/10 to-[#FFD700]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2 animate-fade-in">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8B0000] to-[#FFD700] mx-auto mb-4"></div>
          <p className="text-[#f5f5f5]/80 text-lg max-w-2xl mx-auto">
            Come experience the Zauq difference in person or reach out with any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg p-8 hover:border-[#FFD700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/20 transform hover:-translate-y-1 group cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B0000] border-2 border-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-all duration-300">
                    <info.icon className="text-[#FFD700] group-hover:text-[#8B0000]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#f5f5f5] hover:text-[#FFD700] transition-colors text-lg font-semibold"
                      >
                        {info.content[0]}
                      </a>
                    ) : (
                      <div className="space-y-1">
                        {info.content.map((line, lineIdx) => (
                          <p key={lineIdx} className="text-[#f5f5f5]/80">
                            {line}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg overflow-hidden h-[500px] group hover:border-[#FFD700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD700]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1234567890123!2d67.0731!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDQnMjMuMiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zauq Town Restaurant Location"
            ></iframe>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-[#8B0000]/20 to-[#FFD700]/10 border-2 border-[#FFD700]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:outline-none focus:border-[#FFD700] transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-[#1a1a1a] border-2 border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:outline-none focus:border-[#FFD700] transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B0000] text-[#FFD700] py-3 border-2 border-[#FFD700] font-bold flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
            {submitted && (
              <div className="mt-4 p-4 bg-[#8B0000]/30 border-2 border-[#FFD700] rounded-lg text-[#FFD700] text-center font-semibold animate-fade-in">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#FFD700] mb-8">Ready to Order?</h3>
          <button className="bg-[#8B0000] text-[#FFD700] px-12 py-4 text-xl font-bold border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-[#FFD700]/40">
            Place Your Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
