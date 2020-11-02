import {HttpErrorResponse} from '@angular/common/http';
import notify from 'devextreme/ui/notify';

export function showError(error: HttpErrorResponse) {
  console.error(error);
  const errorMessage = error.error ? error.error : error.message;
  notify(errorMessage, 'error');
}
