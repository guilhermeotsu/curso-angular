import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin.routes";
import { AdminDashboardComponent  } from "./admin-dashboard/admin-dashboard.component";

@NgModule({
    declarations: [
        AdminDashboardComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    providers: [],
    exports: []
})

export class AdminModule {}
