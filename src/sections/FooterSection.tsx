import { Separator } from "@/components/ui/separator"

function Footer() {
  return (
    <footer className="w-full px-4 md:px-12 py-10 bg-muted text-muted-foreground mt-6 md:mt-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex gap-4 text-sm">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos de uso</a>
            <a href="#">Contacto</a>
          </nav>
        </div>
        <Separator />
        <p className="text-center text-xs">&copy; {new Date().getFullYear()} Yuntayki. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;