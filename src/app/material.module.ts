import { NgModule } from "../../node_modules/@angular/core";
import { MatButtonModule, MatInputModule, MatBadgeModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatMenuModule,MatListModule } from '@angular/material'

@NgModule({
    imports : [
        MatButtonModule,
        MatInputModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatListModule
    ],
    exports : [
        MatButtonModule,
        MatInputModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatListModule

    ]
})
export class MaterialModule{

}