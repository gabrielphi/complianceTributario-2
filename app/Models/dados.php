<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dados extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'nome_produto',
        'codigo_de_barras',
        'ncm_produto'
    ];

    public function tributacao(){ 
        return $this->hasMany('App\Models\tributacao');
    }
}
