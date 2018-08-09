import { NgModule } from "../../node_modules/@angular/core";
import { MatButtonModule, MatInputModule, MatBadgeModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatFormFieldModule, MatMenuModule,MatListModule, MatSelectModule, MatCardModule } from '@angular/material'

@NgModule({
    imports : [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule
    ],
    exports : [
        MatButtonModule,
        MatBadgeModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatMenuModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule

    ]
})
export class MaterialModule{

}