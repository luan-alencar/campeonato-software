import { NgModule } from '@angular/core';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
       FormsModule,
       ReactiveFormsModule,
       ComponentsModule
    ]
})
export class SharedModule { }
