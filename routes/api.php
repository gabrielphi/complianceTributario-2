<?php

use App\Http\Controllers\EmpresasController;
use App\Http\Controllers\DadosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route Empresas

Route::get('empresas',[EmpresasController::class, "index"]);
Route::post('empresas', [EmpresasController::class, "store"]);
Route::put('empresas/{id}', [EmpresasController::class, "update"]);
Route::delete('empresas/{id}', [EmpresasController::class, "delete"]);

//Route Dados

Route::get('produtos/{empres_id}',[DadosController::class, "show"]);
Route::post('produtos', [DadosController::class, "store"]);