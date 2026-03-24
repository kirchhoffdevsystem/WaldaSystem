import css from "./footer.module.css"

export default function Footer_Component() {
  return (
    <footer className={css.footer}>
      <p>&copy; 2026 Sindicato de Vigilantes. Todos os direitos reservados.</p>
      <small>Produzido por: <a href="#">Kirchhoff Dev System</a> </small>
    </footer>
  );
};