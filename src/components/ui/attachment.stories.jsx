import {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
} from './attachment';
import { FileText, X } from 'lucide-react';

export default {
  title: 'UI/Attachment',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = () => (
  <Attachment style={{ width: 260 }}>
    <AttachmentMedia>
      <FileText />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>propuesta.pdf</AttachmentTitle>
      <AttachmentDescription>2.4 MB</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction>
        <X />
      </AttachmentAction>
    </AttachmentActions>
  </Attachment>
);
