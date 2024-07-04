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
            $table->float('icms_aliquota', precision: 1);
            $table->integer('icms_cst');
            $table->float('pis_aliquota', precision: 1);
            $table->integer('pis_cst');
            $table->float('cofins_aliquota', precision: 1);
            $table->integer('cofins_cst');
            $table->integer('empresa_id')->unsigned();
            $table->foreign('empresa_id')->references('id')->on('empresas');
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
