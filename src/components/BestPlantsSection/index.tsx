import Image from "next/image";
import styles from "./styles.module.scss";

export const BestPlantsSection = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Sua casa com as</h1>
            <h2 className={styles.subtitle}>melhores plantas</h2>
          </div>
          <p className={styles.description}>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <form className={styles.form}>
            <div className={styles.input_container}>
              <div className={styles.icon}>
                <Image
                  src="/assets/icons/email.svg"
                  alt="Ícone de e-mail"
                  width={22}
                  height={10}
                />
              </div>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Assinar newsletter
            </button>
          </form>
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/images/best_plant.png"
            alt="Imagem uma planta em um vaso"
            width={580}
            height={890}
          />
        </div>
      </div>
    </section>
  );
};

export default BestPlantsSection;
