<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * Class is groep, die moet een relatie hebben met een groep migration.
     * Active is wanneer hij/zij de opleiding heeft gestart.
     * Level is niveau van de opleiding.
     * Location is adres van school.
     * Time is deeltijd of voltijd.
     *
     */
    public function up(): void
    {
        Schema::create('studenten', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->integer('soort_opleiding');
            $table->integer('class');
            $table->date('active');
            $table->string('level');
            $table->string('location');
            $table->integer('time');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studenten');
    }
};