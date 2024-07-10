<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dados', function (Blueprint $table) {
            $table->increments('id_produto');
            $table->string('nome_produto');
            $table->integer('codigo_de_barras');
            $table->integer('ncm_produto');  
            
        });
    }
    /**
     * Aliquota ICMS, PIS, COFINS (DOUBL)
     * CST ICMS, PIS COFINS
     */
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dados');
    }
};
