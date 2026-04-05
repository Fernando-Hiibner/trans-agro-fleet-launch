import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, TrendingUp, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Segurança Total", desc: "Monitoramento e cuidado em cada etapa do transporte." },
  { icon: Clock, title: "Pontualidade", desc: "Compromisso rigoroso com prazos de entrega." },
  { icon: TrendingUp, title: "Eficiência", desc: "Operações otimizadas para máxima produtividade." },
  { icon: Headphones, title: "Suporte Dedicado", desc: "Atendimento próximo e personalizado ao cliente." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-section-alt" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Sobre o Serviço
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
              Soluções logísticas que{" "}
              <span className="text-gradient-primary">movem seu negócio</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A <strong className="text-foreground">Trans Agro</strong> é especializada em transporte
              rodoviário de cargas, oferecendo logística inteligente e confiável para
              empresas que precisam de agilidade, segurança e compromisso com resultados.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Com foco em excelência operacional, garantimos que sua carga seja
              transportada com o mais alto padrão de qualidade, cumprindo prazos
              e oferecendo suporte completo em todas as etapas do processo logístico.
              Nossa equipe trabalha com dedicação para entregar soluções sob medida
              para cada cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="bg-gradient-primary rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
