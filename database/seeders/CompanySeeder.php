<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;
use DB;

class CompanySeeder extends CsvSeeder
{
    /**
     * constructor.
     */
    public function __construct ()
    {
        $this->table        = 'companies';
        $this->should_trim  = true;

        $this->filename = base_path() . '/database/seeders/csvs/top500Domains.csv';
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Recommended when importing larger CSV
        //DB::disableQueryLog();

        // Clean table before importing
        DB::table($this->table)->truncate();

        parent::run();
    }
}
