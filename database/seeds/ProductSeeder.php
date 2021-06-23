<?php
use Illuminate\Database\Seeder;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productRecord = [
            [
                'title' => 'This is seed post title for my blog',
                'description' => 'description',
                'image' => 'default.png',
                'slug' => 'slug',
                'status' => 1
            ]
        ];
        Post::insert($productRecord);
    }
}
