import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

export default {
  title: 'UI/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Accordion type="single" collapsible style={{ width: 360 }}>
    <AccordionItem value="item-1">
      <AccordionTrigger>¿Es accesible?</AccordionTrigger>
      <AccordionContent>
        Sí, sigue el patrón WAI-ARIA de accordion.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>¿Está estilizado?</AccordionTrigger>
      <AccordionContent>
        Sí, viene con estilos por defecto que combinan con el resto del tema.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>¿Tiene animación?</AccordionTrigger>
      <AccordionContent>
        Sí, se anima suavemente al abrir y cerrar.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
