"use client"

import { Button } from "@/components/ui/button";

interface AddBrandFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void; // You can type this properly based on your form data
}

export function AddBrandForm({ isOpen, onClose, onSubmit }: AddBrandFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold mb-4">Add Your Brand</h2>
        {/* Add your form components here */}
        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="ghost"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#163400] text-white hover:bg-[#163400]/90"
            onClick={() => {
              // Handle form submission
              onSubmit({});
              onClose();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
