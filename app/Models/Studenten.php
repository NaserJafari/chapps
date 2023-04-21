<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Studenten extends Model
{
    use HasFactory;
    use HasRoles;

    protected $fillable = [
        'name',
        'email',
        'soort_opleiding',
        'class',
        'active',
        'level',
        'location',
        'time'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];
}
