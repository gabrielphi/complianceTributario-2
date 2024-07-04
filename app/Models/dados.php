<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dados extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome_produto',
        'codigo_de_barras',
        'ncm_produto',
        'icms_aliquota',
        'icms_cst',
        'pis_aliquota',
        'pis_cst',
        'cofins_aliquota',
        'cofins_cst',
        'empresa_id'



    ];
}
