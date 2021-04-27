[1mdiff --git a/template-forms/src/app/admin/admin.module.ts b/template-forms/src/app/admin/admin.module.ts[m
[1mindex 8249ec6..3cc3056 100644[m
[1m--- a/template-forms/src/app/admin/admin.module.ts[m
[1m+++ b/template-forms/src/app/admin/admin.module.ts[m
[36m@@ -1,7 +1,7 @@[m
 import { CommonModule } from "@angular/common";[m
 import { NgModule } from "@angular/core";[m
[31m-import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";[m
 import { AdminRoutingModule } from "./admin.routes";[m
[32m+[m[32mimport { AdminDashboardComponent  } from "./admin-dashboard/admin-dashboard.component";[m[41m[m
 [m
 @NgModule({[m
     declarations: [[m
[36m@@ -15,4 +15,4 @@[m [mimport { AdminRoutingModule } from "./admin.routes";[m
     exports: [][m
 })[m
 [m
[31m-export class AdminModule {}[m
\ No newline at end of file[m
[32m+[m[32mexport class AdminModule {}[m[41m[m
