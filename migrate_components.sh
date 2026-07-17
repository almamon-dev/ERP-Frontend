#!/bin/bash

# Target directory
SRC="src/components"

# Helper function to copy if exists
copy_if_exists() {
    local source=$1
    local target=$2
    if [ -f "$source" ]; then
        # Copy the contents of the file, convert .jsx to .tsx implicitly by copying to the target which is a .tsx file
        cp "$source" "$target"
        echo "Migrated $source -> $target"
    fi
}

# UI Components
copy_if_exists "src2/components/ui/button.jsx" "$SRC/ui/button/index.tsx"
copy_if_exists "src2/components/Button/PrimaryButton.jsx" "$SRC/ui/button/index.tsx"
copy_if_exists "src2/components/ui/select.jsx" "$SRC/ui/select/index.tsx"
copy_if_exists "src2/components/ui/popover.jsx" "$SRC/ui/popover/index.tsx"
copy_if_exists "src2/components/ui/command.jsx" "$SRC/ui/command/index.tsx"
copy_if_exists "src2/components/ui/toast.jsx" "$SRC/feedback/toast/index.tsx"
copy_if_exists "src2/components/ui/radio-group.jsx" "$SRC/ui/radio/index.tsx"
copy_if_exists "src2/components/ui/Pagination.jsx" "$SRC/ui/pagination/index.tsx"
copy_if_exists "src2/components/ui/LoadingOverlay.jsx" "$SRC/feedback/loading/index.tsx"

# Form Components
copy_if_exists "src2/components/Form/TextInput.jsx" "$SRC/ui/input/index.tsx"
copy_if_exists "src2/components/Form/TextArea.jsx" "$SRC/ui/textarea/index.tsx"
copy_if_exists "src2/components/Form/Checkbox.jsx" "$SRC/ui/checkbox/index.tsx"
copy_if_exists "src2/components/Form/SelectInput.jsx" "$SRC/forms/form-control/index.tsx"
copy_if_exists "src2/components/Form/InputLabel.jsx" "$SRC/forms/form-label/index.tsx"
copy_if_exists "src2/components/Form/InputError.jsx" "$SRC/forms/form-message/index.tsx"
copy_if_exists "src2/components/Form/TagInput.jsx" "$SRC/ui/chip/index.tsx"

# Modal Components
copy_if_exists "src2/components/Modal/Modal.jsx" "$SRC/modals/modal/index.tsx"
copy_if_exists "src2/components/Modal/ConfirmModal.jsx" "$SRC/modals/confirm-modal/index.tsx"
copy_if_exists "src2/components/Modal/DeleteConfirmModal.jsx" "$SRC/modals/delete-modal/index.tsx"

# Common Components
copy_if_exists "src2/components/Common/Dropdown.jsx" "$SRC/ui/dropdown/index.tsx"
copy_if_exists "src2/components/Common/Pagination.jsx" "$SRC/tables/table-pagination/index.tsx"
copy_if_exists "src2/components/Common/ApplicationLogo.jsx" "$SRC/common/page-title/index.tsx"
copy_if_exists "src2/components/Common/StatusDropdown.jsx" "$SRC/ui/dropdown/index.tsx"

# Tables
copy_if_exists "src2/components/tables/data-table/index.tsx" "$SRC/tables/data-table/index.tsx"
copy_if_exists "src2/components/tables/table-pagination/index.tsx" "$SRC/tables/table-pagination/index.tsx"

echo "Migration script completed!"
