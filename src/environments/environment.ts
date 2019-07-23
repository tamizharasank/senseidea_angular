import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

export const environment = {
  spinner: NgxSpinnerService,
  production: false,
  // system ip
  Url: 'http://52.199.245.71:3000/api/admin',
  swalalert(type, msg) {
    if (type === 'success') {
      return new Promise(resolve => {
        Swal.fire({
          type: 'success',
          title: 'Success',
          text: msg,
          showConfirmButton: false,
          timer: 1500
        }).then(async (result) => {
          resolve(true);
        });
      });
    } else if (type === 'delete') {
      return new Promise(resolve => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, ' + msg + ' it!'
        }).then(async (result) => {
          if (result.value) {
            Swal.fire({
              title: msg + '!',
              text: '  ' + msg + '.',
              type: 'success',
              showConfirmButton: false,
              timer: 1000
            }).then(async (result) => {
              resolve(true);
            })
          }
        })
      });
    } else if (type === 'nodata' || type === 'underconst') {
      Swal.fire({
        title: '<strong>Attention<u>!</u></strong>',
        type: 'info',
        html: '<b>' + msg + '</b>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="material-icons">thumb_up</i> OK!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="material-icons">thumb_down</i>',
        cancelButtonAriaLabel: 'Thumbs down',
      })
    }
    else {
      Swal.fire({
        type: type,
        title: 'OOPS!',
        text: msg,
        showConfirmButton: true,
      });
    }
  }
};