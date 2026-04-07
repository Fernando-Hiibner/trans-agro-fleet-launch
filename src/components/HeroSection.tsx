import { ChevronDown, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Frota de caminhões Trans Agro em rodovia"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm text-primary-foreground animate-fade-up">
            <span className="w-2 h-2 bg-secondary rounded-full animate-bounce-subtle" />
            Transporte rodoviário de excelência
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-primary-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Sua carga no destino certo,{" "}
            <span className="text-gradient-primary">no prazo certo.</span>
          </h1>

          <p
            className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A Trans Agro B.E. oferece aos seus parceiros soluções logísticas
            independente do volume, com uma operação de máxima eficiência logística.
            Visando:
          </p>

          <ul className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl list-disc list-inside mt-2 mb-2">
            <li>Pontualidade</li>
            <li>Segurança</li>
          </ul>

          <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
            Onde você, parceiro, pode acompanhar toda a operação conjuntamente
            pelo sistema de monitoramento, gerando transparência e confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#contato"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-primary hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Fale Conosco
            </a>
            {/* Removido por ser redundante */}
            {/* <a
              href="#contato"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              <Mail className="h-5 w-5" />
              Entre em Contato
            </a> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/15 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "100%", label: "Comprometimento" },
              { value: "24/7", label: "Suporte Operacional" },
              { value: "Brasil", label: "Cobertura Nacional" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading font-bold text-2xl sm:text-3xl text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors animate-bounce-subtle"
      >
        <span className="text-xs font-medium">Saiba mais</span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;
