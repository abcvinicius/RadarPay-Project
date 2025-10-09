const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-4 px-6 mt-8">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>© 2024 Toku. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacidade
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
