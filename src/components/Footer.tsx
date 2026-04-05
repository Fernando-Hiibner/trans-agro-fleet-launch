import { Truck, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-lg text-surface-dark-foreground">
                Trans Agro
              </span>
            </div>
            <p className="text-surface-dark-foreground/50 text-sm leading-relaxed">
              Transporte rodoviário de cargas com excelência, segurança e pontualidade.
              Sua carga no destino certo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-surface-dark-foreground mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {["Início", "Sobre", "Vantagens", "Diferenciais", "Contato"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-sm text-surface-dark-foreground/50 hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-surface-dark-foreground mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-surface-dark-foreground/50">
              <li>Carga a Granel</li>
              <li>Carga Seca</li>
              <li>Carga Refrigerada</li>
              <li>Logística Integrada</li>
              <li>Transporte Dedicado</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-surface-dark-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: "Brasil — Nacional" },
                { icon: Phone, text: "(00) 0000-0000" },
                { icon: Mail, text: "contato@transagro.com.br" },
              ].map((c) => (
                <li key={c.text} className="flex items-center gap-2 text-sm text-surface-dark-foreground/50">
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-dark-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-dark-foreground/40">
            © {new Date().getFullYear()} Trans Agro — Todos os direitos reservados.
          </p>
          <p className="text-xs text-surface-dark-foreground/30">
            Transporte rodoviário de cargas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
