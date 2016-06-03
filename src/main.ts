import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { ROUTER_PROVIDERS
  // ,LocationStrategy,
  // HashLocationStrategy
 } from '@angular/router';
import { AiGraphAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap( AiGraphAppComponent, [ROUTER_PROVIDERS
  ,provide(LocationStrategy, {useClass: HashLocationStrategy})
]
);
