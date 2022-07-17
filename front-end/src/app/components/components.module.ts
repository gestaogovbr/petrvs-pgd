import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { GridComponent } from './grid/grid.component';
import { ColumnComponent } from './grid/column/column.component';
import { ColumnHeaderComponent } from './grid/column-header/column-header.component';
import { ColumnRowComponent } from './grid/column-row/column-row.component';
import { ColumnOptionsComponent } from './grid/column-options/column-options.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilterComponent } from './grid/filter/filter.component';
import { ColumnsComponent } from './grid/columns/columns.component';
import { EditableFormComponent } from './editable-form/editable-form.component';
import { PaginationComponent } from './grid/pagination/pagination.component';
import { InputContainerComponent } from './input/input-container/input-container.component';
import { InputSwitchComponent } from './input/input-switch/input-switch.component';
import { InputDisplayComponent } from './input/input-display/input-display.component';
import { InputSearchComponent } from './input/input-search/input-search.component';
import { InputButtonComponent } from './input/input-button/input-button.component';
import { InputTextComponent } from './input/input-text/input-text.component';
import { InputTextareaComponent } from './input/input-textarea/input-textarea.component';
import { InputDatetimeComponent } from './input/input-datetime/input-datetime.component';
import { InputRadioComponent } from './input/input-radio/input-radio.component';
import { InputSelectComponent } from './input/input-select/input-select.component';
import { InputMultiselectComponent } from './input/input-multiselect/input-multiselect.component';
import { InputColorComponent } from './input/input-color/input-color.component';
import { InputTimerComponent } from './input/input-timer/input-timer.component';
import { InputRateComponent } from './input/input-rate/input-rate.component';
import { InputMultitoggleComponent } from './input/input-multitoggle/input-multitoggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { SeparatorComponent } from './separator/separator.component';
import { TopAlertComponent } from './top-alert/top-alert.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReportComponent } from './grid/report/report.component';
import { ColumnExpandComponent } from './grid/column-expand/column-expand.component';
import { KanbanComponent } from './kanban/kanban.component';
import { SwimlaneComponent } from './kanban/swimlane/swimlane.component';
import { DockerComponent } from './kanban/docker/docker.component';
import { CardComponent } from './kanban/card/card.component';
import { DndModule } from 'ngx-drag-drop';
import { AngularDoubleScrollbarsModule } from 'angular-double-scrollbars';
import { OrderComponent } from './grid/order/order.component';
import { ChartsModule }  from 'ng2-charts';
import { BarChartComponent } from './charts/bar/bar-chart.component';
import { InputWorkloadComponent } from './input/input-workload/input-workload.component';
import { PieChartComponent } from './charts/pie/pie-chart.component';

@NgModule({
  declarations: [
    BarChartComponent,
    PieChartComponent,
    GridComponent,
    ColumnComponent,
    ColumnHeaderComponent,
    ColumnRowComponent,
    ColumnOptionsComponent,
    ToolbarComponent,
    FilterComponent,
    ColumnsComponent,
    EditableFormComponent,
    PaginationComponent,
    InputContainerComponent,
    InputSwitchComponent,
    InputDisplayComponent,
    InputSearchComponent,
    InputButtonComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputDatetimeComponent,
    InputRadioComponent,
    InputSelectComponent,
    InputMultiselectComponent,
    InputColorComponent,
    InputTimerComponent,
    InputRateComponent,
    InputMultitoggleComponent,
    TabsComponent,
    TabComponent,
    SeparatorComponent,
    TopAlertComponent,
    ReportComponent,
    ColumnExpandComponent,
    KanbanComponent,
    SwimlaneComponent,
    DockerComponent,
    CardComponent,
    OrderComponent,
    InputWorkloadComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    DndModule,
    AngularDoubleScrollbarsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    BarChartComponent,
    PieChartComponent,
    GridComponent,
    ColumnsComponent,
    ColumnComponent,
    FilterComponent,
    ToolbarComponent,
    PaginationComponent,
    EditableFormComponent,
    InputContainerComponent,
    InputSwitchComponent,
    InputDisplayComponent,
    InputSearchComponent,
    InputButtonComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputDatetimeComponent,
    InputRadioComponent,
    InputSelectComponent,
    InputColorComponent,
    InputMultiselectComponent,
    InputTimerComponent,
    InputRateComponent,
    InputMultitoggleComponent,
    TabsComponent,
    TabComponent,
    SeparatorComponent,
    TopAlertComponent,
    ReportComponent,
    KanbanComponent,
    SwimlaneComponent,
    DockerComponent,
    CardComponent,
    OrderComponent,
    InputWorkloadComponent
  ]
})
export class ComponentsModule { }
