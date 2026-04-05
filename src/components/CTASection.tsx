import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Truck } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-section-alt" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-primary rounded-2xl p-10 sm:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/15 rounded-full px-4 py-2 text-sm text-primary-foreground font-medium">
              <Truck className="h-4 w-4" />
              Pronto para começar?
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              Precisa de uma transportadora confiável?
            </h2>

            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
              Entre em contato com a Trans Agro e descubra como podemos
              otimizar sua logística com segurança e eficiência.
            </p>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              Solicite Atendimento Agora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
