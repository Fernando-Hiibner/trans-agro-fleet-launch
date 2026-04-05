import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PackageCheck, ShieldCheck, Gauge, Users, BadgeDollarSign, BarChart3 } from "lucide-react";

const advantages = [
  {
    icon: PackageCheck,
    title: "Entregas no Prazo",
    desc: "Compromisso absoluto com os prazos acordados. Planejamento logístico rigoroso para garantir que sua carga chegue no momento certo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança da Carga",
    desc: "Procedimentos rigorosos de manuseio e transporte que protegem sua mercadoria em toda a jornada, do ponto de coleta ao destino final.",
  },
  {
    icon: Gauge,
    title: "Eficiência Operacional",
    desc: "Processos otimizados e gestão inteligente de rotas para maximizar resultados e reduzir custos operacionais.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    desc: "Cada cliente recebe atenção dedicada. Entendemos suas necessidades e oferecemos soluções logísticas sob medida.",
  },
  {
    icon: BadgeDollarSign,
    title: "Custo-Benefício Real",
    desc: "Serviço premium com preços competitivos. Investimos em eficiência para oferecer o melhor retorno ao seu negócio.",
  },
  {
    icon: BarChart3,
    title: "Organização Logística",
    desc: "Gestão estruturada de toda a cadeia de transporte, com controle e transparência em cada etapa do processo.",
  },
];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vantagens" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Vantagens
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Por que escolher a{" "}
            <span className="text-gradient-primary">Trans Agro?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos mais do que transporte — entregamos confiança, compromisso
            e resultados mensuráveis para sua operação logística.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover border border-transparent hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-accent rounded-xl p-3 w-fit mb-5 group-hover:bg-gradient-primary transition-all duration-300">
                <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
