<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DateTime;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert([
            ['id' => 1,
                'name' => 'gebruiker1',
                'email' => 'gebruiker1@gmail.com',
                'password' => bcrypt('Tester123!'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime,
            ],
            ['id' => 2,
                'name' => 'gebruiker2',
                'email' => 'gebruiker2@gmail.com',
                'password' => bcrypt('Tester123!'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime,

            ],
            ]);
    }
}
