import React, { useState } from 'react';
import { Mail, CheckCircle2, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 4 && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      id="contacto"
      aria-label="Contacto y boletín informativo"
      className="w-full py-12 sm:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-3 border-b border-[#E7E5DF]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#767676] font-medium block">
              Atención & Novedades
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1A1A1A] mt-1">
              Contacto
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] tracking-wide mt-2 sm:mt-0">
            Estamos disponibles para asesorarte en tallas, cuidados y lanzamientos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#787878] font-medium block mb-2">
                Boletín Atelier
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1A1A1A] tracking-tight mb-2">
                Recibe acceso prioritario a nuevas cápsulas
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6">
                Enviamos notas breves y discretas solo cuando presentamos nuevas piezas o abrimos reservas de unidades limitadas. Sin saturación.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 p-4 bg-[#F5F8F4] border border-[#D2E4D0] rounded-lg text-[#265324]">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm font-medium">
                    Gracias por unirte. Te hemos enviado una confirmación a tu correo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Introduce tu correo electrónico"
                      className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#F8F7F4] border border-[#E0DDD5] rounded-lg text-[#1A1A1A] placeholder-[#888888] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                    />
                  </div>
                  <button
                    id="newsletter-submit-button"
                    type="submit"
                    className="px-6 py-3 text-xs sm:text-sm font-medium tracking-wider uppercase bg-[#1A1A1A] text-[#F8F7F4] hover:bg-[#333333] rounded-lg transition-colors cursor-pointer flex-shrink-0"
                  >
                    Suscribirme
                  </button>
                </form>
              )}
            </div>

            <p className="text-[11px] text-[#888888] mt-6">
              Al suscribirte aceptas nuestra política de privacidad. Puedes cancelar tu suscripción con un solo clic en cualquier momento.
            </p>
          </div>

          {/* Contact Details Box */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E5E2DC] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#787878] font-medium block mb-2">
                Atención Personalizada
              </span>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
                Atelier & Showroom
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#555555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1A1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Espacio Central</p>
                    <p>Calle Almagro 14, 28010 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1A1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Horario de Atención</p>
                    <p>Lunes a Viernes: 10:00 — 19:30</p>
                    <p>Sábados: 11:00 — 15:00 (con cita previa)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1A1A1A] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Consultas Generales</p>
                    <a
                      href="mailto:hola@atelier-minimal.com"
                      className="hover:text-[#1A1A1A] underline underline-offset-2"
                    >
                      hola@atelier-minimal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F0ECE4]">
              <p className="text-xs text-[#777777]">
                Envíos y devoluciones gratuitos en península para todos los pedidos superiores a 100 €.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
