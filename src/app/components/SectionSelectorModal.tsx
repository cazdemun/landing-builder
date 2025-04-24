import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import DummySection from "./DummySection";

type SectionSelectorModalProps = {
  children?: React.ReactNode
}

const SectionSelectorModal: React.FC<SectionSelectorModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto min-w-[95vw] max-h-[95vh] p-8">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>Please select a section</DialogDescription>
        </DialogHeader>
        {[1, 2, 3, 4].map(() => (
          <DummySection key={Math.random()} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default SectionSelectorModal;