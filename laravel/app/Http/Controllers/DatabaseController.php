<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class DatabaseController extends Controller
{
    //use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
	public function getData($page = 1){
      
	  $paging = 3;
	  
	  $pageStart = ($page - 1) * $paging;
	  $pageEnd = $page * $paging;
	  
	  $users = DB::select('select id,name,description from expivi_listpage limit ?,?', [$pageStart,$pageEnd]);
	  foreach ($users as $user) {
		echo $user->id.',';
		echo $user->name.',';
		echo $user->description.',';
	  }

   }
   
   public function exist($id){
      
	  $users = DB::select('select id from expivi_listpage where id=?', [$id]);
	  if(count($users) > 0){
		echo 'true';
	  }
	  else
		echo 'false';

   }
   
   public function getRow($id){
      
	  $users = DB::select('select id,name,description from expivi_listpage where id=?', [$id]);
	  foreach ($users as $user) {
		echo $user->id.',';
		echo $user->name.',';
		echo $user->description.',';
	  }
	  
   }
   
   public function edit(Request $request){
      
	  DB::update('update expivi_listpage set name=?, description=? where id=?', [$request->input('name'), $request->input('description'), $request->input('id')]);
	  echo 'true';
	  
   }
   
   public function add(Request $request){
      
	  DB::insert('insert into expivi_listpage (name, description) values (? ,?)', [$request->input('name'), $request->input('description')]);
	  echo 'true';
	  
   }
   
   public function search($term = '', $page = 1){
      
	  $paging = 3;
	  
	  $pageStart = ($page - 1) * $paging;
	  $pageEnd = $page * $paging;
	  
	  $users = DB::select('select id,name,description from expivi_listpage where name like \'%'.$term.'%\' or description like \'%'.$term.'%\' limit ?,?', [$pageStart,$pageEnd]);
	  foreach ($users as $user) {
		echo $user->id.',';
		echo $user->name.',';
		echo $user->description.',';
	  }
	  
   }
   
   
}
