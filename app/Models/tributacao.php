<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tributacao extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'icms_aliquota',
        'icms_cst',
        'pis_aliquota',
        'pis_cst',
        'cofins_aliquota',
        'cofins_cst',
        'tipo_tributacao',
        'id_produto_fk'
    ];

    public function dados(){ 
        return $this->belongsTo('App\Models\dados');
    }
    
}
