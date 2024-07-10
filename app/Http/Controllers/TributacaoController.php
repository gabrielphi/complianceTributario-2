<?php

namespace App\Http\Controllers;

use App\Models\tributacao;
use App\Http\Requests\StoretributacaoRequest;
use App\Http\Requests\UpdatetributacaoRequest;
use Illuminate\Http\Request;

class TributacaoController extends Controller
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
        tributacao::create([
            "id_tributo" => $req->id_tributo,
            "icms_aliquota" => $req->icms_aliquota,
            "icms_cst" => $req->icms_cst,
            "pis_aliquota" => $req->pis_aliquota,
            "pis_cst" => $req->pis_cst,
            "cofins_aliquota" => $req->cofins_aliquota,
            "cofins_cst" => $req->cofins_cst,
            "tipo_tributacao" => $req->tipo_tributacao,
            "id_produto_fk" => $req->id_produto_fk,
            
        ]);
        return response(["OK"], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $req)
    {
        return tributacao::all()->where("id_produto_fk", $req->id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tributacao $tributacao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatetributacaoRequest $request, tributacao $tributacao)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tributacao $tributacao)
    {
        //
    }
}
