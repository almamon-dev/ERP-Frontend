import React from 'react';
import { Save } from 'lucide-react';
import Modal from '@/components/modals/modal';
import Button from '@/components/ui/button';
import { ItemFormModalContent } from './ItemFormModalContent';

interface FormModalsProps {
  title: string;
  isCreateOpen: boolean;
  onCloseCreate: () => void;
  editItem: any;
  onCloseEdit: () => void;
}

export const FormModals: React.FC<FormModalsProps> = ({
  title,
  isCreateOpen,
  onCloseCreate,
  editItem,
  onCloseEdit,
}) => (
  <>
    <Modal
      isOpen={isCreateOpen}
      onClose={onCloseCreate}
      title={title || "Record"}
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={onCloseCreate} className="h-8.5 text-[12.5px]">Cancel</Button>
          <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
            <Save size={13} /> Save
          </Button>
        </>
      }
    >
      <ItemFormModalContent />
    </Modal>

    <Modal
      isOpen={!!editItem}
      onClose={onCloseEdit}
      title={title || "Record"}
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={onCloseEdit} className="h-8.5 text-[12.5px]">Cancel</Button>
          <Button className="bg-[#008060] hover:bg-[#006e52] text-white gap-1.5 flex items-center text-[12.5px] h-8.5 px-3.5">
            <Save size={13} /> Save Changes
          </Button>
        </>
      }
    >
      {editItem && <ItemFormModalContent isEdit editItem={editItem} />}
    </Modal>
  </>
);
