// import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxCheckBoxModule, DxListModule, DxTabPanelModule, DxButtonModule } from 'devextreme-angular';
import { DxToolbarModule, DxDropDownBoxModule, DxTreeViewModule, DxTabsModule } from 'devextreme-angular';

// import components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'multi-view', component: MenuComponent },
  { path: 'task', component: TasksComponent },
  
]

@NgModule({
  declarations: [ // components
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    SearchComponent,
    DataGridComponent,
    MenuComponent,
    
  ],
  imports: [ // modules
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    DxTabsModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxToolbarModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
    DxListModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
