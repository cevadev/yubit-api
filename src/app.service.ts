import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home(): string {
    return 'Bienvenido al eCommerce Yubit';
  }

  login(): string {
    return 'Usted necesita identificarse';
  }
}
