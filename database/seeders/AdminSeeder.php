<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use mysql_xdevapi\Table;
use DateTime;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('admin')->insert([
            ['id' => 1,
                'name' => 'Jan Appel',
                'email' => 'jan1@gmail.com',
                'password' => bcrypt('Tester123!'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime,
            ],
            ['id' => 2,
                'name' => 'User twee',
                'email' => 'jan@gmail.com',
                'password' => bcrypt('Tester123!'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime,

            ],
            ]);

    }
}
