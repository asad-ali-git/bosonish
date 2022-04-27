<?php

namespace App\Models;
use App\Models\Expense;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    public function expenses(){
        return $this->hasMany(Expense::class);
    }
}
