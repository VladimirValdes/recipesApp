import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert( title: string , desc: string, icon: SweetAlertIcon ) {
    Swal.fire({
      icon: icon,
      title: title,
      text: desc,
      showConfirmButton: true,
      confirmButtonColor: '#0f0f2c'
    });
  }
}
