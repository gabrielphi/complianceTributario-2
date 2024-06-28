<?php

namespace App\Http\Controllers;

use App\Models\Empresas;
use Illuminate\Http\Request;

class EmpresasController extends Controller
{
    public function index(){
        return Empresas::all();
    }

    public function store(Request $req){
        Empresas::create([
            "id" => $req->id,
            "nome" => $req->name,
            "cnpj" => $req->cnpj,
            "inscricaoEstadual" => $req->inscricaoEstadual,
            "tag" => $req->tag
        ]);
        return response(["OK"], 200);
    }

    public function update(Request $req){
        $empresas = Empresas::find($req->id);
        $empresas->name = $req->name;
        $empresas->cnpj = $req->cnpj;
        $empresas->inscricaoEstadual = $req->inscricaoEstadual;
        $empresas->tag = $req->tag;

        $empresas->save();

        return response("Tudo certo", 200);
    }

    public function delete(Request $req){
        $empresas = Empresas::find($req->id);

        $empresas->delete();
        return response("Produto Apagado",200);
    }
}
