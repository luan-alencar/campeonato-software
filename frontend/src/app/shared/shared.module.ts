import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
        CardComponent
    ],
    declarations: [CardComponent]
})
export class SharedModule { }
