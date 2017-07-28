<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/getData/{page}', 'DatabaseController@getData');

Route::get('/exist/{id}', 'DatabaseController@exist');

Route::get('/getRow/{id}', 'DatabaseController@getRow');

Route::post('/edit', 'DatabaseController@edit');

Route::post('/add', 'DatabaseController@add');

Route::get('/search/{term}/{page}', 'DatabaseController@search');
