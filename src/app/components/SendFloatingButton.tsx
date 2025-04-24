import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const SendFloatingButton = () => {
  return (
    <Button
      className="fixed bottom-12 right-6 shadow-lg px-4 py-2 flex items-center gap-2 cursor-pointer"
      variant="secondary"
    >
      <Send /> Enviar
    </Button>
  )
}

export default SendFloatingButton;