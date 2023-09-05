<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use Stancl\Tenancy\Middleware\InitializeTenancyByPath;

/* Testes *
Route::get('/teste', function (Request $request) { return ["CENTRAL"]; }); *


/* 
Rota dinâmica para login social Microsoft (Azure)
baseado em B2B (multi-tenancy / multi-tenant)
*/

Route::middleware([InitializeTenancyByPath::class])
    ->get('/login-azure-callback/{tenant}', 
          [LoginController::class, 'signInAzureCallback']);