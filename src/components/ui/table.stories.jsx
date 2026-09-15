import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

export default {
  title: 'UI/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const facturas = [
  { id: 'INV001', estado: 'Pagada', metodo: 'Tarjeta de crédito', total: '$250.00' },
  { id: 'INV002', estado: 'Pendiente', metodo: 'PayPal', total: '$150.00' },
  { id: 'INV003', estado: 'No pagada', metodo: 'Transferencia', total: '$350.00' },
];

export const Default = () => (
  <Table style={{ width: 480 }}>
    <TableCaption>Lista de tus facturas recientes.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Factura</TableHead>
        <TableHead>Estado</TableHead>
        <TableHead>Método</TableHead>
        <TableHead style={{ textAlign: 'right' }}>Total</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {facturas.map((f) => (
        <TableRow key={f.id}>
          <TableCell>{f.id}</TableCell>
          <TableCell>{f.estado}</TableCell>
          <TableCell>{f.metodo}</TableCell>
          <TableCell style={{ textAlign: 'right' }}>{f.total}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
