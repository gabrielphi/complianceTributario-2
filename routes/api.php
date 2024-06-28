<?php

use App\Http\Controllers\EmpresasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('empresas',[EmpresasController::class, "index"]);
Route::post('empresas', [EmpresasController::class, "store"]);
Route::put('empresas/{id}', [EmpresasController::class, "update"]);
Route::delete('empresas/{id}', [EmpresasController::class, "delete"]);
