import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestTempRefVarComponent } from './test-temp-ref-var/test-temp-ref-var.component';
import { TestValueBindComponent } from './test-value-bind/test-value-bind.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestPipeComponent } from './test-pipe/test-pipe';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TestInterpolationComponent,
    TestTempRefVarComponent,
    TestValueBindComponent,
    TestTwowayBindingComponent,
    FontResizerComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    TestNgModelComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestPipeComponent,
    TestSafeNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
