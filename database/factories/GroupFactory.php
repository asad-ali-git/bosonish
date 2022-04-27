<?php

namespace Database\Factories;

use App\Models\Group;
use Illuminate\Database\Eloquent\Factories\Factory;

class GroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

     protected $model = Group::class;
    public function definition()
    {
        return [
            // 'name' => $this->faker->name,
            // 'type' => 'Expenses'

            'name' => $this->faker->name,
            'type' => 'Incomes'
        ]; 
    }
}
