<?php

namespace App\Http\Controllers;

use App\Models\dados;
use App\Http\Requests\StoredadosRequest;
use App\Http\Requests\UpdatedadosRequest;
use Illuminate\Http\Request;

class DadosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $req)
    {
        dados::create([
            "id" => $req->id,
            "nome_produto" => $req->nome_produto,
            "codigo_de_barras" => $req->codigo_de_barras,
            "ncm_produto" => $req->ncm_produto,
        ]);
        return response(["OK"], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $req)
    {
        return dados::all();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(dados $dados)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatedadosRequest $request, dados $dados)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(dados $dados)
    {
        //
    }
}
