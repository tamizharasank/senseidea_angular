import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

export const environment = {
  spinner: NgxSpinnerService,
  production: true,
  // system ip
  // 18.188.221.36
  Url: 'http://52.199.245.71:3000/api/admin',
  swalalert(type, msg) {
    if (type === 'success') {
      return new Promise(resolve => {
        Swal.fire({
          type: 'success',
          title: '成功',
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
          title: '本気ですか?',
          text: "元に戻すことはできません!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, ' + msg + ' it!'
        }).then(async (result) => {
          if (result.value) {
            Swal.fire({
              title: msg + '!',
              text: 'あなたのファイルはされています ' + msg + '.',
              type: 'success',
              showConfirmButton: false,
              timer: 1000
            }).then(async (result) => {
              resolve(true);
            })
          }
        })
      });
    } else if (type === 'nodata') {
      Swal.fire({
        title: '<strong>注意<u>!</u></strong>',
        type: 'info',
        html: '<b>' + msg + '</b>',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText:
          '<i class="material-icons">thumb_up</i> OK!',
        confirmButtonAriaLabel: '親指を立てる、素晴らしい!',
        cancelButtonText:
          '<i class="material-icons">thumb_down</i>',
        cancelButtonAriaLabel: '拒絶',
      })
    }
    else {
      Swal.fire({
        type: type,
        title: 'おっとっと!',
        text: msg,
        showConfirmButton: true,
      });
    }
  }
};