import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmitRef = useRef(0);

  const validate = (data: Record<string, string>) => {
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = "Nome é obrigatório";
    if (!data.email?.trim()) errs.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "E-mail inválido";
    if (!data.phone?.trim()) errs.phone = "Telefone é obrigatório";
    if (!data.message?.trim()) errs.message = "Mensagem é obrigatória";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => (data[k] = v.toString()));

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Rate limit - 10s between submissions
    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      setErrors({ form: "Aguarde alguns segundos antes de enviar novamente." });
      return;
    }
    lastSubmitRef.current = now;

    setStatus("loading");

    // Simulate submission (backend integration needed)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-muted border ${
      errors[field] ? "border-destructive" : "border-border"
    } rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200`;

  return (
    <section id="contato" className="py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Contato
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-4">
                Fale com a{" "}
                <span className="text-gradient-primary">Trans Agro</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato
                o mais breve possível para atender sua demanda logística.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Endereço", value: "Brasil — Atendimento Nacional" },
                { icon: Phone, label: "Telefone", value: "(00) 0000-0000" },
                { icon: Mail, label: "E-mail", value: "contato@transagro.com.br" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="bg-accent rounded-lg p-3">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-10 text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-secondary mx-auto" />
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  Mensagem enviada!
                </h3>
                <p className="text-muted-foreground">
                  Obrigado pelo contato. Nossa equipe responderá em breve.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-semibold hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-card p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
                    <input name="name" type="text" placeholder="Seu nome completo" className={inputClasses("name")} />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
                    <input name="company" type="text" placeholder="Nome da empresa" className={inputClasses("company")} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone *</label>
                    <input name="phone" type="tel" placeholder="(00) 00000-0000" className={inputClasses("phone")} />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail *</label>
                    <input name="email" type="email" placeholder="seu@email.com" className={inputClasses("email")} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Tipo de Carga / Serviço</label>
                  <select name="serviceType" className={inputClasses("serviceType")}>
                    <option value="">Selecione uma opção</option>
                    <option value="granel">Carga a Granel</option>
                    <option value="seca">Carga Seca</option>
                    <option value="refrigerada">Carga Refrigerada</option>
                    <option value="perigosa">Carga Perigosa</option>
                    <option value="geral">Carga Geral</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem *</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Descreva sua necessidade logística..."
                    className={inputClasses("message") + " resize-none"}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                {errors.form && (
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    {errors.form}
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    Erro ao enviar. Tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-primary hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
