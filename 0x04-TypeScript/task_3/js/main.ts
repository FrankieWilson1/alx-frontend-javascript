// task_3/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: 'John', lastName: 'Doe', age: 30};
CRUD.insertRow(obj); 
CRUD.updateRow(newRowID, { firstName: 'Guillaume', lastName: 'Salva', age: 31 });
