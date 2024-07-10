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
        Schema::create('tributacaos', function (Blueprint $table) {
            $table->increments('id_tributo');
            $table->float('icms_aliquota', precision: 1);
            $table->integer('icms_cst');
            $table->float('pis_aliquota', precision: 1);
            $table->integer('pis_cst');
            $table->float('cofins_aliquota', precision: 1);
            $table->integer('cofins_cst');
            $table->integer('tipo_tributacao');
            $table->integer('id_produto_fk')->unsigned();
            $table->foreign('id_produto_fk')->references('id_produto')->on('dados')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tributacaos');
    }
};
