import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Lock, Zap, Heart, BookOpen, Network } from "lucide-react";

const differentials = [
  { icon: Lock, title: "Compromisso com a Carga", desc: "Tratamos cada transporte como se fosse nosso próprio patrimônio. Responsabilidade total do início ao fim." },
  { icon: Award, title: "Foco em Segurança", desc: "Protocolos rigorosos e profissionais capacitados para garantir a integridade de cada operação." },
  { icon: Zap, title: "Eficiência nas Operações", desc: "Processos ágeis e tecnologia aplicada para entregar resultados superiores." },
  { icon: Heart, title: "Confiança no Atendimento", desc: "Relacionamento transparente e comunicação clara. Você sempre sabe o status da sua carga." },
  { icon: BookOpen, title: "Experiência Comprovada", desc: "Know-how sólido em transporte rodoviário, com histórico de operações bem-sucedidas." },
  { icon: Network, title: "Logística Estruturada", desc: "Planejamento inteligente de rotas e recursos para otimizar cada entrega." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-surface-dark overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Diferenciais
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-surface-dark-foreground mt-3 mb-4">
            O que nos torna{" "}
            <span className="text-gradient-primary">referência</span>
          </h2>
          <p className="text-surface-dark-foreground/60 text-lg">
            Cada detalhe da nossa operação é pensado para garantir excelência,
            segurança e resultados consistentes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-xl p-8 border border-surface-dark-foreground/10 hover:border-primary/40 bg-surface-dark-foreground/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-primary/15 rounded-xl p-3 w-fit mb-5 group-hover:bg-gradient-primary transition-all duration-300">
                <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-surface-dark-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
