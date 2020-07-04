import { ElementRef } from '@angular/core';

declare var M;

export interface MaterialInstance {
    open?(): void;
    close?(): void;
    destroy?(): void;
}

export interface MaterialDatepicker extends MaterialInstance {
    date?: Date;
}

export class MaterialService {
    static initSidenav(ref: ElementRef) {
        M.Sidenav.init(ref.nativeElement);
    }
    static toast(message: string) {
        M.toast({html: message});
    }
    static updateTextInputs() {
        M.updateTextFields();
    }
    static initModal(ref: ElementRef): MaterialInstance {
        return M.Modal.init(ref.nativeElement);
    }
    static initDatepicker(ref: ElementRef, onClose: () => void): MaterialInstance {
        return M.Datepicker.init(ref.nativeElement, {
            format: 'dd.mm.yyyy',
            showClearButton: true,
            onClose
        });
    }
}
